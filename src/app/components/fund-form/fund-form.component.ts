import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { configurations } from 'src/app/configurations/configurations';
import { DataTransferService } from 'src/app/services/data-transfer.service';

@Component({
  selector: 'app-fund-form',
  templateUrl: './fund-form.component.html',
  styleUrls: ['./fund-form.component.css']
})
export class FundFormComponent {

  fundForm!: FormGroup;
  startDate = configurations.stockStartDate;
  today = configurations.today;
  formFieldWidth = configurations.formFieldWidth;

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
    this.dataTransferService.addFund(this.fundForm.value).subscribe();
    console.log(this.fundForm.value);
    this.dataTransferService.getFunds().subscribe(funds =>
      console.log(funds)
    );
  }

}
