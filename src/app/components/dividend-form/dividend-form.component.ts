import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { configurations } from 'src/app/configurations/configurations';
import { CompanyDetails } from 'src/app/models/company-details.model';

@Component({
  selector: 'app-dividend-form',
  templateUrl: './dividend-form.component.html',
  styleUrls: ['./dividend-form.component.css']
})
export class DividendFormComponent {

  constructor(private formBuilder:FormBuilder){

  }

  dividendForm!:FormGroup;
  companies:CompanyDetails[]=[
    {symbol:"ITC",name:"Indian Tobacco"},
    {symbol:"TCS",name:"Tata Consultancy Services"},
    {symbol:"Wipro",name:"Wipro Services"}
  ];
  today = configurations.today;
  formFieldWidth = configurations.formFieldWidth;

  ngOnInit(){
    this.dividendForm  = this.formBuilder.group({
      companyName:['',Validators.required],
      creditedDate:[this.today.toISOString().slice(0, 10),Validators.required],
      creditedAmount:[null,[Validators.required,Validators.min(0.01)]]
    });
  }

  onFormSubmit(){
    console.log(this.dividendForm.controls)

  }
}
