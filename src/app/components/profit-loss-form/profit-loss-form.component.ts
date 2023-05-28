import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Utility } from 'src/app/utilities/Utility';
import { CompanyDetails } from 'src/app/models/company-details.model';
import { DataTransferService } from 'src/app/services/data-transfer.service';

@Component({
  selector: 'app-profit-loss-form',
  templateUrl: './profit-loss-form.component.html',
  styleUrls: ['./profit-loss-form.component.css']
})
export class ProfitLossFormComponent {

  profitLossForm!: FormGroup;
  startDate = Utility.stockStartDate;
  today = Utility.today;
  formFieldWidth = Utility.formFieldWidth;
  isLoading = false;

  constructor(private formBuilder: FormBuilder, private dataTransferService: DataTransferService) {
  }

  stocks: CompanyDetails[] = [
    { symbol: "ITC", name: "Indian Tobacco" },
    { symbol: "TCS", name: "Tata Consultancy Services" },
    { symbol: "Wipro", name: "Wipro Services" }
  ];

  ngOnInit() {
    this.profitLossForm = this.formBuilder.group({
      stockName: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.min(1), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      bought: this.formBuilder.group({
        boughtDate: ['', Validators.required],
        boughtPrice: ['', [Validators.required, Validators.min(0.01), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]]
      }),
      sold: this.formBuilder.group({
        soldDate: ['', Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)],
        soldPrice: ['', [Validators.required, Validators.min(0.01), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]]
      })
    });
  }

  onFormSubmit() {
    this.isLoading = true;
    this.dataTransferService.addProfitLoss(this.profitLossForm.value).subscribe(response =>{
      this.isLoading = false;
    });
    console.log(this.profitLossForm.value);
    this.dataTransferService.getProfitLosses().subscribe(profitLosses =>
      console.log(profitLosses)
    );
  }

}
