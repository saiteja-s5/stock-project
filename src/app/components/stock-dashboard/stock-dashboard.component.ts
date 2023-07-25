import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { StockDashboard } from 'src/app/models/stock-dashboard.model';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { TableUpdateFormComponent } from '../table-update-form/table-update-form.component';
import { Utility } from 'src/app/utilities/utility';

@Component({
  selector: 'app-stock-dashboard',
  templateUrl: './stock-dashboard.component.html',
  styleUrls: ['./stock-dashboard.component.css']
})
export class StockDashboardComponent {

  stockData!: StockDashboard;
  modal!: DynamicDialogRef;
  formatNumber = Utility.formatNumber;

  constructor(private dataService: DataTransferService, public dialog: DialogService) {
    this.dataService.getStockDashboard().subscribe(stockData => {
      this.stockData = stockData;
    });
  }

  updateDate() {
    this.modal = this.dialog.open(TableUpdateFormComponent, {
      data: {
        isStockUpdate: true
      },
      header: 'Update Table',
      width: '60%',
      maximizable: true,
      modal: true
    })
  }

}
