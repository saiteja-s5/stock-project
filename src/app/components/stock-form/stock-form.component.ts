import { Component } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
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
  today = new Date();
  ngOnInit(){
    this.stockForm  = this.formBuilder.group({
      stockName:['',Validators.required],
      investmentDate:[this.today.toISOString().slice(0, 10),Validators.required],
      quantity:[null,[Validators.required,Validators.min(1)]],
      buyPrice:[null,[Validators.required,Validators.min(0.01)]]
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
