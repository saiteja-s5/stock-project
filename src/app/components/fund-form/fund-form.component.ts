import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Utility } from 'src/app/utilities/utility';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { SuccessSnackbarComponent } from '../success-snackbar/success-snackbar.component';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  constructor(private formBuilder: FormBuilder, private dataTransferService: DataTransferService,private snackBar:MatSnackBar) {
  }

  ngOnInit() {
    this.fundForm = this.formBuilder.group({
      transactionDate: ['', Validators.required],
      creditedAmount: ['', [Validators.required, Validators.min(0.01), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      debitedAmount: ['', [Validators.required, Validators.min(0.01), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]]
    });
  }

  onFormSubmit() {
    this.isLoading = true;
    this.fundForm.patchValue({ transactionDate: Utility.formatDate(this.fundForm.value.transactionDate) });
    this.dataTransferService.addFund(this.fundForm.value).subscribe(response=>{
      this.isLoading = false;
      this.openSnackBar();
    });
    this.dataTransferService.getFundsForTable().subscribe(funds =>
      console.log(funds)
    );
  }

  openSnackBar() {
    this.snackBar.openFromComponent(SuccessSnackbarComponent, {
      duration: Utility.snackBarDuration,
    });
  }

}
