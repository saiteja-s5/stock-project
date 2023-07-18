import { Component } from '@angular/core';
import { FundFormComponent } from '../fund-form/fund-form.component';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-fund-modal-button',
  template: `
    <button mat-raised-button color="primary" (click)="openFundModal()">Add Fund Transaction</button>
  `,
  styles: [
  ]
})
export class FundModalButtonComponent {

  modal!: DynamicDialogRef;

  constructor(public dialog: DialogService) {
  }

  openFundModal() {
    this.modal = this.dialog.open(FundFormComponent, {
      header: 'Add Fund Transaction',
      width: '60%',
      maximizable: true,
      modal: true
    })
  }

}
