import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { configurations } from 'src/app/configurations/configurations';
import { CompanyDetails } from 'src/app/models/company-details.model';
import { DataTransferService } from 'src/app/services/data-transfer.service';


@Component({
  selector: 'app-dividend-form',
  templateUrl: './dividend-form.component.html',
  styleUrls: ['./dividend-form.component.css']
})
export class DividendFormComponent {

  dividendForm!: FormGroup;
  startDate = configurations.stockStartDate;
  today = configurations.today;
  formFieldWidth = configurations.formFieldWidth;

  constructor(private formBuilder: FormBuilder, private dataTransferService: DataTransferService) {
  }

  companies: CompanyDetails[] = [
    { symbol: "ITC", name: "Indian Tobacco" },
    { symbol: "TCS", name: "Tata Consultancy Services" },
    { symbol: "Wipro", name: "Wipro Services" }
  ];

  ngOnInit() {
    this.dividendForm = this.formBuilder.group({
      companyName: ['', Validators.required],
      creditedDate: ['', Validators.required],
      creditedAmount: ['', [Validators.required, Validators.min(0.01), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]]
    });
  }

  onFormSubmit() {
    this.dataTransferService.addDividend(this.dividendForm.value).subscribe();
    console.log(this.dividendForm.value);
    this.dataTransferService.getDividends().subscribe(dividends =>
      console.log(dividends)
    );
  }
}
