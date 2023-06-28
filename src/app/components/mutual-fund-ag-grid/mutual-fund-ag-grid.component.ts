import { Component } from '@angular/core';
import { ColDef, ColumnApi, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { MutualFundTableRow } from 'src/app/models/mutual-fund-table.model';
import { DataTransferService } from 'src/app/services/data-transfer.service';

@Component({
  selector: 'app-mutual-fund-ag-grid',
  templateUrl: './mutual-fund-ag-grid.component.html',
  styleUrls: ['./mutual-fund-ag-grid.component.css']
})
export class MutualFundAgGridComponent {
  
  constructor(private dataService: DataTransferService) { }

  private gridColumnApi!: ColumnApi;
  rowData$!: Observable<MutualFundTableRow[]>;

  ngOnInit() {
    this.rowData$ = this.dataService.getMutualFundsForTable();
  }

  defColDefs: ColDef = {
    sortable: true, filter: true, resizable: true
  }

  colDefs: ColDef[] = [
    { field: 'investmentDate' },
    { field: 'amountAdded' },
    { field: 'investmentType' },
    { field: 'unitsAlloted' },
    { field: 'nav' },
    { field: 'holdDuration' },
    { field: 'overallReturnPer' }
  ];

  onGridReady(params:GridReadyEvent<MutualFundTableRow>){
    this.gridColumnApi = params.columnApi;
    const allColumnIds: string[] = [];
    this.gridColumnApi.getColumns()!.forEach((column) => {
      allColumnIds.push(column.getId());
    });
    this.gridColumnApi.autoSizeColumns(allColumnIds,false);
  }
}
