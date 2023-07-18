import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Utility } from 'src/app/utilities/utility';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { SuccessSnackbarComponent } from '../success-snackbar/success-snackbar.component';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  constructor(private formBuilder: FormBuilder, private dataTransferService: DataTransferService,private snackBar:MatSnackBar) {
  }

  investmentTypes = ['SIP', 'LUMPSUM'];

  ngOnInit() {
    this.mutualFundForm = this.formBuilder.group({
      investmentDate: ['', Validators.required],
      amountAdded: ['', [Validators.required, Validators.min(0.01), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      investmentType: ['', Validators.required],
      unitsAlloted: ['', [Validators.required, Validators.min(0.0001), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      nav: ['', [Validators.required, Validators.min(0.0001), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
    });
  }

  onFormSubmit() {
    this.isLoading = true;
    console.log(this.mutualFundForm.value)
    this.mutualFundForm.patchValue({ investmentDate: Utility.formatDate(this.mutualFundForm.value.investmentDate) });
    console.log(this.mutualFundForm.value)
    this.dataTransferService.addMutualFund(this.mutualFundForm.value).subscribe(response=>{
      this.isLoading = false;
      this.openSnackBar();
    });
    this.dataTransferService.getMutualFundsForTable().subscribe(mutualFunds =>
      console.log(mutualFunds)
    );
  }

  openSnackBar() {
    this.snackBar.openFromComponent(SuccessSnackbarComponent, {
      duration: Utility.snackBarDuration,
    });
  }

}
