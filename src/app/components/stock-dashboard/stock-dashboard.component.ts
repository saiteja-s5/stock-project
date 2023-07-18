import { Component } from '@angular/core';
import { StockDashboard } from 'src/app/models/stock-dashboard.model';
import { DataTransferService } from 'src/app/services/data-transfer.service';

@Component({
  selector: 'app-stock-dashboard',
  templateUrl: './stock-dashboard.component.html',
  styleUrls: ['./stock-dashboard.component.css']
})
export class StockDashboardComponent {

  stockData! : StockDashboard;

  constructor(private dataService:DataTransferService){
    this.dataService.getStockDashboard().subscribe(stockData => {
      this.stockData = stockData;
    });
  }

}
