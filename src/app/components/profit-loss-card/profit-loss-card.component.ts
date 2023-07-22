import { Component } from '@angular/core';
import { ProfitLossDashboard } from 'src/app/models/profit-loss-dashboard.model';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { Utility } from 'src/app/utilities/utility';

@Component({
  selector: 'app-profit-loss-card',
  templateUrl: './profit-loss-card.component.html',
  styleUrls: ['./profit-loss-card.component.css']
})
export class ProfitLossCardComponent {

  profitLossData!: ProfitLossDashboard;
  isLoading = false;
  formatNumber = Utility.formatNumber;

  constructor(private dataService: DataTransferService) {
    this.isLoading = true;
    this.dataService.getProfitLossDashboard().subscribe(profitLossData => {
      this.profitLossData = profitLossData;
      this.isLoading = false
    });
  }

}
