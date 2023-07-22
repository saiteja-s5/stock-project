import { Component } from '@angular/core';
import { FundDashboard } from 'src/app/models/fund-dashboard.model';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { Utility } from 'src/app/utilities/utility';

@Component({
  selector: 'app-fund-card',
  templateUrl: './fund-card.component.html',
  styleUrls: ['./fund-card.component.css']
})
export class FundCardComponent {

  fundData!: FundDashboard;
  isLoading = false;
  formatNumber = Utility.formatNumber;

  constructor(private dataService: DataTransferService) {
    this.isLoading = true;
    this.dataService.getFundDashboard().subscribe(fundData => {
      this.fundData = fundData;
      this.isLoading = false
    });
  }

}
