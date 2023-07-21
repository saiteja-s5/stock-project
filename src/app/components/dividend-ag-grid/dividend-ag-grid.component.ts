import { Component } from '@angular/core';
import { ColDef, ColumnApi, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { DividendTableRow } from 'src/app/models/dividend-table.model';
import { DataTransferService } from 'src/app/services/data-transfer.service';

@Component({
  selector: 'app-dividend-ag-grid',
  templateUrl: './dividend-ag-grid.component.html',
  styleUrls: ['./dividend-ag-grid.component.css']
})
export class DividendAgGridComponent {
  constructor(private dataService: DataTransferService) { }

  private gridColumnApi!: ColumnApi;
  rowData$!: Observable<DividendTableRow[]>;

  ngOnInit() {
    this.rowData$ = this.dataService.getDividendsForTable();
  }

  defColDefs: ColDef = {
    sortable: true, filter: true, resizable: true
  }

  colDefs: ColDef[] = [
    { field: 'companyName' },
    { field: 'creditedDate' },
    { field: 'creditedAmount' }
  ];

  onGridReady(params: GridReadyEvent<DividendTableRow>) {
    this.gridColumnApi = params.columnApi;
    const allColumnIds: string[] = [];
    this.gridColumnApi.getColumns()!.forEach((column) => {
      allColumnIds.push(column.getId());
    });
    this.gridColumnApi.autoSizeColumns(allColumnIds, false);
  }
}
