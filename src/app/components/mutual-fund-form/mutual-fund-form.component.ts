import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { configurations } from 'src/app/configurations/configurations';
import { DataTransferService } from 'src/app/services/data-transfer.service';

@Component({
  selector: 'app-mutual-fund-form',
  templateUrl: './mutual-fund-form.component.html',
  styleUrls: ['./mutual-fund-form.component.css']
})
export class MutualFundFormComponent {

  mutualFundForm!: FormGroup;
  startDate = configurations.mutualFundStartDate;
  today = configurations.today;
  formFieldWidth = configurations.formFieldWidth;

  constructor(private formBuilder: FormBuilder, private dataTransferService: DataTransferService) {
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
    this.dataTransferService.addMutualFund(this.mutualFundForm.value).subscribe();
    console.log(this.mutualFundForm.value);
    this.dataTransferService.getMutualFunds().subscribe(mutualFunds =>
      console.log(mutualFunds)
    );
  }

}
