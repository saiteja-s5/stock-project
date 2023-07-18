import { Component } from '@angular/core';
import { StockFormComponent } from '../stock-form/stock-form.component';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-stock-modal-button',
  template: `
    <button mat-raised-button color="primary" (click)="openStockModal()">Add Stock Transaction</button>
  `,
  styles: [
  ]
})
export class StockModalButtonComponent {

  modal!: DynamicDialogRef;

  constructor(public dialog: DialogService) {
  }

  openStockModal() {
    this.modal = this.dialog.open(StockFormComponent, {
      header: 'Add Stock Transaction',
      width: '60%',
      maximizable: true,
      modal: true
    })
  }

}
