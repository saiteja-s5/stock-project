import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Utility } from 'src/app/utilities/Utility';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { SuccessSnackbarComponent } from '../success-snackbar/success-snackbar.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CompanyNameDropdown } from 'src/app/models/company-name-dropdown.model';

@Component({
  selector: 'app-profit-loss-form',
  templateUrl: './profit-loss-form.component.html',
  styleUrls: ['./profit-loss-form.component.css']
})
export class ProfitLossFormComponent {

  profitLossForm!: FormGroup;
  stocks!: CompanyNameDropdown[];
  startDate = Utility.stockStartDate;
  today = Utility.today;
  formFieldWidth = Utility.formFieldWidth;
  isLoading = false;

  constructor(private formBuilder: FormBuilder, private dataTransferService: DataTransferService,private snackBar:MatSnackBar) {
  }

  ngOnInit() {
    this.isLoading = true;
    this.dataTransferService.getCompanyNameDropDowns().subscribe(companies =>{
      this.stocks = companies;
      this.isLoading = false;
    })
    this.profitLossForm = this.formBuilder.group({
      stockName: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.min(1), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      bought: this.formBuilder.group({
        boughtDate: ['', Validators.required],
        boughtPrice: ['', [Validators.required, Validators.min(0.01), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]]
      }),
      sold: this.formBuilder.group({
        soldDate: ['', Validators.required],
        soldPrice: ['', [Validators.required, Validators.min(0.01), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]]
      })
    });
  }

  onFormSubmit() {
    this.isLoading = true;
    (this.profitLossForm.controls['bought'] as FormGroup).controls['boughtDate'].setValue(Utility.formatDate(this.profitLossForm.value.bought.boughtDate));
    (this.profitLossForm.controls['sold'] as FormGroup).controls['soldDate'].setValue(Utility.formatDate(this.profitLossForm.value.sold.soldDate));
    this.dataTransferService.addProfitLoss(this.profitLossForm.value).subscribe(response =>{
      this.isLoading = false;
      this.openSnackBar();
      console.log(response)
    });
    this.dataTransferService.getProfitLossesForTable().subscribe(profitLosses =>
      console.log(profitLosses)
    );
  }

  openSnackBar() {
    this.snackBar.openFromComponent(SuccessSnackbarComponent, {
      duration: Utility.snackBarDuration,
    });
  }
  
}
