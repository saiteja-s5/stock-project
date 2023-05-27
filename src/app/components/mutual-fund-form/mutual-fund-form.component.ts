import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mutual-fund-form',
  templateUrl: './mutual-fund-form.component.html',
  styleUrls: ['./mutual-fund-form.component.css']
})
export class MutualFundFormComponent {

  mutualFundForm!:FormGroup;
  today = new Date();  
  investmentTypes = ['SIP','LUMPSUM'];
  constructor(private formBuilder:FormBuilder){
  }

  ngOnInit(){
    this.mutualFundForm  = this.formBuilder.group({
      investmentDate:[this.today.toISOString().slice(0, 10),Validators.required],
      amountAdded:[null,[Validators.required,Validators.min(0.01)]],
      investmentType:['',Validators.required],
      unitsAlloted:[null,[Validators.required,Validators.min(0.0001)]],
      nav:[null,[Validators.required,Validators.min(0.0001)]],      
    });
  }

  onFormSubmit(){
   
  }

}
