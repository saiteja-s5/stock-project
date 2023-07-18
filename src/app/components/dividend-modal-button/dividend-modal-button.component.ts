import { Component } from '@angular/core';
import { DividendFormComponent } from '../dividend-form/dividend-form.component';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-dividend-modal-button',
  template: `
        <button mat-raised-button color="primary" (click)="openDividendModal()">Add Dividend Transaction</button>
  `,
  styles: [
  ]
})
export class DividendModalButtonComponent {

  modal!: DynamicDialogRef;

  constructor(public dialog: DialogService) {
  }

  openDividendModal() {
    this.modal = this.dialog.open(DividendFormComponent, {
      header: 'Add Dividend Transaction',
      width: '60%',
      maximizable: true,
      modal: true
    })
  }

}
