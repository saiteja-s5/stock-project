import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Utility } from 'src/app/utilities/Utility';
import { DataTransferService } from 'src/app/services/data-transfer.service';

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

  constructor(private formBuilder: FormBuilder, private dataTransferService: DataTransferService) {
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
    this.dataTransferService.addFund(this.fundForm.value).subscribe(response=>{
      this.isLoading = false;
    });
    console.log(this.fundForm.value);
    this.dataTransferService.getFunds().subscribe(funds =>
      console.log(funds)
    );
  }

}
