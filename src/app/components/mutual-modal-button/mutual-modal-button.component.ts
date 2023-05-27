import { Component } from '@angular/core';
import { MutualFundFormComponent } from '../mutual-fund-form/mutual-fund-form.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-mutual-modal-button',
  template: `
    <button mat-raised-button color="primary" (click)="openMutualFundModal()">Add Mutual Fund Transaction</button>
  `,
  styles: [
  ]
})
export class MutualModalButtonComponent {

  constructor(private matDialog: MatDialog) {
  }

  openMutualFundModal() {
    this.matDialog.open(MutualFundFormComponent, {
      disableClose: true,
    })
  }

}
