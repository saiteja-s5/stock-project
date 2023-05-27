import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StockFormComponent } from '../stock-form/stock-form.component';

@Component({
  selector: 'app-stock-modal-button',
  template: `
    <button mat-raised-button color="primary" (click)="openStockModal()">Add Stock Transaction</button>
  `,
  styles: [
  ]
})
export class StockModalButtonComponent {

  constructor(private matDialog:MatDialog){
  }

  openStockModal(){
    this.matDialog.open(StockFormComponent,{
      disableClose: true
    })
  }

}
