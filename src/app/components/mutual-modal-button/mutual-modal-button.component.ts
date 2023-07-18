import { Component } from '@angular/core';
import { MutualFundFormComponent } from '../mutual-fund-form/mutual-fund-form.component';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-mutual-modal-button',
  template: `
    <button mat-raised-button color="primary" (click)="openMutualFundModal()">Add Mutual Fund Transaction</button>
  `,
  styles: [
  ]
})
export class MutualModalButtonComponent {

  modal!: DynamicDialogRef;

  constructor(public dialog: DialogService) {
  }

  openMutualFundModal() {
    this.modal = this.dialog.open(MutualFundFormComponent, {
      header: 'Add Mutual Fund Transaction',
      width: '60%',
      maximizable: true,
      modal: true
    })
  }

}
