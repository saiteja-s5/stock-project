import { Component } from '@angular/core';
import { StockDashboard } from 'src/app/models/stock-dashboard.model';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { Utility } from 'src/app/utilities/utility';

@Component({
  selector: 'app-stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.css']
})
export class StockCardComponent {

  stockData!: StockDashboard;
  isLoading = false;
  formatNumber = Utility.formatNumber;

  constructor(private dataService: DataTransferService) {
    this.isLoading = true;
    this.dataService.getStockDashboard().subscribe(stockData => {
      this.stockData = stockData;
      this.isLoading = false
    });
  }

}
