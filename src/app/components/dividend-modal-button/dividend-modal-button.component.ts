import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DividendFormComponent } from '../dividend-form/dividend-form.component';

@Component({
  selector: 'app-dividend-modal-button',
  template: `
        <button mat-raised-button color="primary" (click)="openDividendModal()">Add Dividend Transaction</button>
  `,
  styles: [
  ]
})
export class DividendModalButtonComponent {

  constructor(private matDialog: MatDialog) {
  }

  openDividendModal() {
    this.matDialog.open(DividendFormComponent, {
      disableClose: true,
    })
  }

}
