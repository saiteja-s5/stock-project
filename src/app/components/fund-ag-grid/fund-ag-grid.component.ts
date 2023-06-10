import { Component } from '@angular/core';
import { ColDef, ColumnApi, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { FundTableRow } from 'src/app/models/fund-table.model';
import { DataTransferService } from 'src/app/services/data-transfer.service';

@Component({
  selector: 'app-fund-ag-grid',
  templateUrl: './fund-ag-grid.component.html',
  styleUrls: ['./fund-ag-grid.component.css']
})
export class FundAgGridComponent {
  constructor(private dataService: DataTransferService) { }

  private gridColumnApi!: ColumnApi;
  rowData$!: Observable<FundTableRow[]>;

  ngOnInit() {
    this.rowData$ = this.dataService.getFundsForTable();
  }

  defColDefs: ColDef = {
    sortable: true, filter: true, resizable: true
  }

  colDefs: ColDef[] = [
    { field: 'transactionDate' },
    { field: 'creditedAmount' },
    { field: 'debitedAmount' },
    { field: 'cashIn' }
  ];

  onGridReady(params:GridReadyEvent<FundTableRow>){
    this.gridColumnApi = params.columnApi;
    const allColumnIds: string[] = [];
    this.gridColumnApi.getColumns()!.forEach((column) => {
      allColumnIds.push(column.getId());
    });
    this.gridColumnApi.autoSizeColumns(allColumnIds,false);
  }
}
