import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { StockFormComponent } from './components/stock-form/stock-form.component';
import { MutualFundFormComponent } from './components/mutual-fund-form/mutual-fund-form.component';
import { ProfitLossFormComponent } from './components/profit-loss-form/profit-loss-form.component';
import { FundFormComponent } from './components/fund-form/fund-form.component';
import { DividendFormComponent } from './components/dividend-form/dividend-form.component';

import { DataTransferService } from './services/data-transfer.service';

@NgModule({
  declarations: [
    AppComponent,
    StockFormComponent,
    MutualFundFormComponent,
    DividendFormComponent,
    ProfitLossFormComponent,
    FundFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgGridModule
  ],
  providers: [DataTransferService],
  bootstrap: [AppComponent]
})
export class AppModule { }
