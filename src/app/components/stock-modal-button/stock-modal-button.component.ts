import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StockFormComponent } from '../stock-form/stock-form.component';

@Component({
  selector: 'app-stock-modal-button',
  templateUrl: './stock-modal-button.component.html',
  styleUrls: ['./stock-modal-button.component.css']
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
