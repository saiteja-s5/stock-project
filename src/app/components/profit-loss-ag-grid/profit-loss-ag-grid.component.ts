import { Component } from '@angular/core';
import { ColDef, ColumnApi, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { ProfitLossTableRow } from 'src/app/models/profit-loss-table.model';
import { DataTransferService } from 'src/app/services/data-transfer.service';

@Component({
  selector: 'app-profit-loss-ag-grid',
  templateUrl: './profit-loss-ag-grid.component.html',
  styleUrls: ['./profit-loss-ag-grid.component.css']
})
export class ProfitLossAgGridComponent {
  constructor(private dataService: DataTransferService) { }

  private gridColumnApi!: ColumnApi;
  rowData$!: Observable<ProfitLossTableRow[]>;

  ngOnInit() {
    this.rowData$ = this.dataService.getProfitLossesForTable();
  }

  defColDefs: ColDef = {
    sortable: true, filter: true, resizable: true
  }

  colDefs: ColDef[] = [
    { field: 'stockName' },
    { field: 'quantity' },
    { field: 'buyDate' },
    { field: 'buyPrice' },
    { field: 'buyValue' },
    { field: 'sellDate' },
    { field: 'sellPrice' },
    { field: 'sellValue' },
    { field: 'holdDuration' },
    { field: 'profitOrLoss' },
    { field: 'perReturn' },
    { field: 'percentReturnperMonth' }
  ];

  onGridReady(params:GridReadyEvent<ProfitLossTableRow>){
    this.gridColumnApi = params.columnApi;
    const allColumnIds: string[] = [];
    this.gridColumnApi.getColumns()!.forEach((column) => {
      allColumnIds.push(column.getId());
    });
    this.gridColumnApi.autoSizeColumns(allColumnIds,false);
  }
}
