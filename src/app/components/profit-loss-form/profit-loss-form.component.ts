import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CompanyDetails } from 'src/app/models/company-details.model';

@Component({
  selector: 'app-profit-loss-form',
  templateUrl: './profit-loss-form.component.html',
  styleUrls: ['./profit-loss-form.component.css']
})
export class ProfitLossFormComponent {

  constructor(private formBuilder:FormBuilder){

  }

  profitLossForm!:FormGroup;
  stocks:CompanyDetails[]=[
    {symbol:"ITC",name:"Indian Tobacco"},
    {symbol:"TCS",name:"Tata Consultancy Services"},
    {symbol:"Wipro",name:"Wipro Services"}
  ];
  today = new Date();
  ngOnInit(){
    this.profitLossForm  = this.formBuilder.group({
      stockName:['',Validators.required],
      quantity:[null,[Validators.required,Validators.min(1)]],
      bought: this.formBuilder.group({
        boughtDate:[this.today.toISOString().slice(0, 10),Validators.required],
        boughtPrice:[null,[Validators.required,Validators.min(0.01)]]
      }),
      sold:this.formBuilder.group({
        soldDate:[this.today.toISOString().slice(0, 10),Validators.required],
        soldPrice:[null,[Validators.required,Validators.min(0.01)]]
      })
    });
  }

  onFormSubmit(){
    
      console.log(this.profitLossForm.value)
   
      console.log(this.profitLossForm)
  }

}
