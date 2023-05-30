import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CompanyNameDropdown } from 'src/app/models/company-name-dropdown.model';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { Utility } from 'src/app/utilities/Utility';
import { SuccessSnackbarComponent } from '../success-snackbar/success-snackbar.component';

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent {

  stockForm!: FormGroup;
  stocks!: CompanyNameDropdown[];
  startDate = Utility.stockStartDate;
  today = Utility.today;
  formFieldWidth = Utility.formFieldWidth;
  isLoading = false;

  constructor(private formBuilder: FormBuilder, private dataTransferService: DataTransferService,public snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.isLoading = true;
    this.dataTransferService.getCompanyNameDropDowns().subscribe(companies =>{
      this.stocks = companies;
      this.isLoading = false;
    })
    this.stockForm = this.formBuilder.group({
      stockName: ['', Validators.required],
      investmentDate: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.min(1), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      buyPrice: ['', [Validators.required, Validators.min(0.01), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]]
    });
  }

  onFormSubmit() {
    this.isLoading = true;
    this.stockForm.patchValue({ investmentDate: Utility.formatDate(this.stockForm.value.investmentDate) });
    this.dataTransferService.addStock(this.stockForm.value).subscribe(response =>{
      this.isLoading = false;
      this.openSnackBar();
    });
    this.dataTransferService.getStocks().subscribe(stocks =>
      console.log("All Stocks Response",stocks)
    );
  }

  openSnackBar() {
    this.snackBar.openFromComponent(SuccessSnackbarComponent, {
      duration: Utility.snackBarDuration,
    });
  }

}
