import { Component, OnInit } from '@angular/core';
import { DataTransferService } from 'src/app/services/data-transfer.service';

@Component({
  selector: 'app-overall-investment-card',
  templateUrl: './overall-investment-card.component.html',
  styleUrls: ['./overall-investment-card.component.css']
})

export class OverallInvestmentCardComponent implements OnInit {

  color!: string;
  overallCurrentValue = 0

  constructor(private dataTransferService: DataTransferService) {
    this.dataTransferService.getStockDashboard().subscribe(stockSummary => {
      this.color = stockSummary.stockCurrentValue > 0 ? 'green' : 'red';
      this.overallCurrentValue = stockSummary.stockInvestmentValue;
    });
  }
  ngOnInit(): void {
  }






}
