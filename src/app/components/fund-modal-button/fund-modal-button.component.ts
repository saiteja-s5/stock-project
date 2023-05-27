import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FundFormComponent } from '../fund-form/fund-form.component';

@Component({
  selector: 'app-fund-modal-button',
  template: `
    <button mat-raised-button color="primary" (click)="openFundModal()">Add Fund Transaction</button>
  `,
  styles: [
  ]
})
export class FundModalButtonComponent {

  constructor(private matDialog: MatDialog) {
  }

  openFundModal() {
    this.matDialog.open(FundFormComponent, {
      disableClose: true,
    })
  }

}
