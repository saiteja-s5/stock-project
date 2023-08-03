import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Utility } from 'src/app/utilities/utility';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-mutual-fund-form',
  templateUrl: './mutual-fund-form.component.html',
  styleUrls: ['./mutual-fund-form.component.css']
})
export class MutualFundFormComponent {

  mutualFundForm!: FormGroup;
  startDate = Utility.mutualFundStartDate;
  today = Utility.today;
  formFieldWidth = Utility.formFieldWidth;
  isLoading = false;
  investmentTypes = ['SIP', 'LUMPSUM'];

  constructor(private formBuilder: FormBuilder, private dataTransferService: DataTransferService, private snackbarService: SnackbarService, public modal: DynamicDialogRef) {
  }

  ngOnInit() {
    this.mutualFundForm = this.formBuilder.group({
      investmentDate: ['', Validators.required],
      amountAdded: ['', [Validators.required, Validators.min(0.01)]],
      investmentType: ['', Validators.required],
      unitsAlloted: ['', [Validators.required, Validators.min(0.0001)]],
      nav: ['', [Validators.required, Validators.min(0.0001)]],
    });
  }

  onFormSubmit() {
    if (this.mutualFundForm.valid) {
      this.isLoading = true;
      this.mutualFundForm.patchValue({ investmentDate: Utility.formatDate(this.mutualFundForm.value.investmentDate) });
      this.dataTransferService.addMutualFund(this.mutualFundForm.value).subscribe({
        next: () => {
          this.isLoading = false;
          this.snackbarService.openSnackBar('success', 'Mutual Fund added sucessfully');
          this.modal.close();
        },
        error: () => {
          this.isLoading = false;
          this.snackbarService.openSnackBar('error', 'Mutual Fund not added');
          this.modal.close();
        }
      });
    } else {
      this.snackbarService.openSnackBar('warn', 'Enter all the fields correctly');
    }
  }

  closeModal() {
    this.modal.close();
    this.snackbarService.openSnackBar('warn', 'Last transaction cancelled');
  }

}
