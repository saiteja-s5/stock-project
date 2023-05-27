import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { configurations } from 'src/app/configurations/configurations';

@Component({
  selector: 'app-fund-form',
  templateUrl: './fund-form.component.html',
  styleUrls: ['./fund-form.component.css']
})
export class FundFormComponent {

  constructor(private formBuilder:FormBuilder){

  }

  fundForm!:FormGroup;
  today = configurations.today;
  formFieldWidth = configurations.formFieldWidth;

  ngOnInit(){
    this.fundForm  = this.formBuilder.group({
      transactionDate:[this.today.toISOString().slice(0, 10),Validators.required],
      creditedAmount:[null,[Validators.required,Validators.min(0.01)]],
      debitedAmount:[null,[Validators.required,Validators.min(0.01)]]
    });
  }

  onFormSubmit(){
    console.log(this.fundForm.value);
  }

}
