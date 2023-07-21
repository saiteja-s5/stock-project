import { Component } from '@angular/core';
import { ColDef, ColumnApi, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { StockTableRow } from 'src/app/models/stock-table.model';
import { DataTransferService } from 'src/app/services/data-transfer.service';

@Component({
  selector: 'app-stock-ag-grid',
  templateUrl: './stock-ag-grid.component.html',
  styleUrls: ['./stock-ag-grid.component.css']
})
export class StockAgGridComponent {

  constructor(private dataService: DataTransferService) { }

  private gridColumnApi!: ColumnApi;
  rowData$!: Observable<StockTableRow[]>;

  ngOnInit() {
    this.rowData$ = this.dataService.getStocksForTable();
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
    { field: 'holdDuration' },
    { field: 'onePerTarget' },
    { field: 'twoPerTarget' }
  ];

  onGridReady(params: GridReadyEvent<StockTableRow>) {
    this.gridColumnApi = params.columnApi;
    const allColumnIds: string[] = [];
    this.gridColumnApi.getColumns()!.forEach((column) => {
      allColumnIds.push(column.getId());
    });
    this.gridColumnApi.autoSizeColumns(allColumnIds, false);
  }

}
