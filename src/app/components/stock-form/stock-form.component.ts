import { Component } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { configurations } from 'src/app/configurations/configurations';
import { CompanyDetails } from 'src/app/models/company-details.model';
import { DataTransferService } from 'src/app/services/data-transfer.service';


@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent {

  constructor(private formBuilder:FormBuilder,private dataTransferService:DataTransferService){

  }

  stockForm!:FormGroup;
  stocks:CompanyDetails[]=[
    {symbol:"ITC",name:"Indian Tobacco"},
    {symbol:"TCS",name:"Tata Consultancy Services"},
    {symbol:"Wipro",name:"Wipro Services"}
  ];
  today = configurations.today;
  formFieldWidth = configurations.formFieldWidth;
  ngOnInit(){
    this.stockForm  = this.formBuilder.group({
      stockName:['',Validators.required],
      investmentDate:['',Validators.required],
      quantity:['',[Validators.required,Validators.min(1),Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      buyPrice:['',[Validators.required,Validators.min(0.01),Validators.pattern(/^-?(0|[1-9]\d*)?$/)]]
    });
  }

  onFormSubmit(){
    
      this.dataTransferService.addStock(this.stockForm.value).subscribe();
      console.log(this.stockForm.value);
      this.dataTransferService.getStocks().subscribe(stocks=>
        console.log(stocks)
      );
  }
  
}
