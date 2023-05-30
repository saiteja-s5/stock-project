import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Utility } from 'src/app/utilities/Utility';
import { CompanyNameDropdown } from 'src/app/models/company-name-dropdown.model';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { SuccessSnackbarComponent } from '../success-snackbar/success-snackbar.component';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-dividend-form',
  templateUrl: './dividend-form.component.html',
  styleUrls: ['./dividend-form.component.css']
})
export class DividendFormComponent {

  dividendForm!: FormGroup;
  startDate = Utility.stockStartDate;
  today = Utility.today;
  formFieldWidth = Utility.formFieldWidth;
  isLoading = false;

  constructor(private formBuilder: FormBuilder, private dataTransferService: DataTransferService,private snackBar:MatSnackBar) {
  }

  companies!: CompanyNameDropdown[];

  ngOnInit() {
    this.dividendForm = this.formBuilder.group({
      companyName: ['', Validators.required],
      creditedDate: ['', Validators.required],
      creditedAmount: ['', [Validators.required, Validators.min(0.01), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]]
    });
  }

  onFormSubmit() {
    this.isLoading = true;
    this.dividendForm.patchValue({ creditedDate: Utility.formatDate(this.dividendForm.value.creditedDate) });
    this.dataTransferService.addDividend(this.dividendForm.value).subscribe(response =>{
      this.isLoading = false;
      this.openSnackBar();
    });
    this.dataTransferService.getDividends().subscribe(dividends =>
      console.log(dividends)
    );
  }

  openSnackBar() {
    this.snackBar.openFromComponent(SuccessSnackbarComponent, {
      duration: 500,
    });
  }
  
}
