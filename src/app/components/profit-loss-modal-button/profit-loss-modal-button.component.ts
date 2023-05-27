import { Component } from '@angular/core';
import { ProfitLossFormComponent } from '../profit-loss-form/profit-loss-form.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-profit-loss-modal-button',
  template: `
    <button mat-raised-button color="primary" (click)="openProfitLossModal()">Add Profit/Loss Transaction</button>
  `,
  styles: [
  ]
})
export class ProfitLossModalButtonComponent {

  constructor(private matDialog: MatDialog) {
  }

  openProfitLossModal() {
    this.matDialog.open(ProfitLossFormComponent, {
      disableClose: true
    })
  }

}
