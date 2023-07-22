import { Component } from '@angular/core';
import { DividendDashboard } from 'src/app/models/dividend-dashboard.model';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { Utility } from 'src/app/utilities/utility';

@Component({
  selector: 'app-dividend-card',
  templateUrl: './dividend-card.component.html',
  styleUrls: ['./dividend-card.component.css']
})
export class DividendCardComponent {

  dividendData!: DividendDashboard;
  isLoading = false;
  formatNumber = Utility.formatNumber;

  constructor(private dataService: DataTransferService) {
    this.isLoading = true;
    this.dataService.getDividendDashboard().subscribe(dividendData => {
      this.dividendData = dividendData;
      this.isLoading = false
    });
  }

}
