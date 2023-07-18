import { Component } from '@angular/core';
import { ProfitLossFormComponent } from '../profit-loss-form/profit-loss-form.component';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-profit-loss-modal-button',
  template: `
    <button mat-raised-button color="primary" (click)="openProfitLossModal()">Add Profit/Loss Transaction</button>
  `,
  styles: [
  ]
})
export class ProfitLossModalButtonComponent {

  modal!: DynamicDialogRef;

  constructor(public dialog: DialogService) {
  }

  openProfitLossModal() {
    this.modal = this.dialog.open(ProfitLossFormComponent, {
      header: 'Add Profit/Loss Transaction',
      width: '60%',
      maximizable: true,
      modal: true
    })
  }

}
