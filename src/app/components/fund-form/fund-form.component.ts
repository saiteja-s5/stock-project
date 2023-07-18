import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Utility } from 'src/app/utilities/utility';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-fund-form',
  templateUrl: './fund-form.component.html',
  styleUrls: ['./fund-form.component.css']
})
export class FundFormComponent {

  fundForm!: FormGroup;
  startDate = Utility.stockStartDate;
  today = Utility.today;
  formFieldWidth = Utility.formFieldWidth;
  isLoading = false;

  constructor(private formBuilder: FormBuilder, private dataTransferService: DataTransferService, private messageService: MessageService, public modal: DynamicDialogRef) {
  }

  ngOnInit() {
    this.fundForm = this.formBuilder.group({
      transactionDate: ['', Validators.required],
      creditedAmount: [0],
      debitedAmount: [0]
    });
  }

  onFormSubmit() {
    if (this.fundForm.valid && (this.fundForm.value.creditedAmount + this.fundForm.value.debitedAmount != 0)) {
      this.isLoading = true;
      this.fundForm.patchValue({ transactionDate: Utility.formatDate(this.fundForm.value.transactionDate) });
      this.dataTransferService.addFund(this.fundForm.value).subscribe({
        next: response => {
          this.isLoading = false;
          this.openSnackBar('success', 'Fund added sucessfully');
          this.modal.close();
        },
        error: () => {
          this.isLoading = false;
          this.openSnackBar('error', 'Fund not added');
          this.modal.close();
        }
      });
    }
    else {
      this.openSnackBar('warn', 'Enter all the fields correctly');
    }
  }

  closeModal() {
    this.modal.close();
    this.openSnackBar('warn', 'Last transaction cancelled');
  }

  openSnackBar(severity: string, message: string) {
    this.messageService.clear();
    this.messageService.add({
      key: 'global', severity: severity, detail: message
    });
  }

}
