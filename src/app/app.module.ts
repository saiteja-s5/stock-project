import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AgGridModule } from 'ag-grid-angular';

import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { ToastModule } from 'primeng/toast';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { AppRoutingModule } from './app-routing.module';

import { StockFormComponent } from './components/stock-form/stock-form.component';
import { MutualFundFormComponent } from './components/mutual-fund-form/mutual-fund-form.component';
import { ProfitLossFormComponent } from './components/profit-loss-form/profit-loss-form.component';
import { FundFormComponent } from './components/fund-form/fund-form.component';
import { DividendFormComponent } from './components/dividend-form/dividend-form.component';
import { StockModalButtonComponent } from './components/stock-modal-button/stock-modal-button.component';
import { MutualModalButtonComponent } from './components/mutual-modal-button/mutual-modal-button.component';
import { DividendModalButtonComponent } from './components/dividend-modal-button/dividend-modal-button.component';
import { FundModalButtonComponent } from './components/fund-modal-button/fund-modal-button.component';
import { ProfitLossModalButtonComponent } from './components/profit-loss-modal-button/profit-loss-modal-button.component';
import { StockAgGridComponent } from './components/stock-ag-grid/stock-ag-grid.component';
import { MutualFundAgGridComponent } from './components/mutual-fund-ag-grid/mutual-fund-ag-grid.component';
import { FundAgGridComponent } from './components/fund-ag-grid/fund-ag-grid.component';
import { DividendAgGridComponent } from './components/dividend-ag-grid/dividend-ag-grid.component';
import { ProfitLossAgGridComponent } from './components/profit-loss-ag-grid/profit-loss-ag-grid.component';
import { OverallInvestmentCardComponent } from './components/overall-investment-card/overall-investment-card.component';
import { StockDashboardComponent } from './components/stock-dashboard/stock-dashboard.component';
import { TableUpdateFormComponent } from './components/table-update-form/table-update-form.component';
import { StockCardComponent } from './components/stock-card/stock-card.component';
import { FundCardComponent } from './components/fund-card/fund-card.component';
import { DividendCardComponent } from './components/dividend-card/dividend-card.component';
import { ProfitLossCardComponent } from './components/profit-loss-card/profit-loss-card.component';

import { AppComponent } from './app.component';

import { ConfirmationService, MessageService } from 'primeng/api';

import { DataTransferService } from './services/data-transfer.service';

@NgModule({
  declarations: [
    AppComponent,
    StockFormComponent,
    MutualFundFormComponent,
    DividendFormComponent,
    ProfitLossFormComponent,
    FundFormComponent,
    StockModalButtonComponent,
    MutualModalButtonComponent,
    DividendModalButtonComponent,
    FundModalButtonComponent,
    ProfitLossModalButtonComponent,
    StockAgGridComponent,
    MutualFundAgGridComponent,
    FundAgGridComponent,
    DividendAgGridComponent,
    ProfitLossAgGridComponent,
    OverallInvestmentCardComponent,
    StockDashboardComponent,
    TableUpdateFormComponent,
    StockCardComponent,
    FundCardComponent,
    DividendCardComponent,
    ProfitLossCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgGridModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    CardModule,
    PanelModule,
    TableModule,
    ButtonModule,
    AutoCompleteModule,
    CalendarModule,
    InputNumberModule,
    DynamicDialogModule,
    DropdownModule,
    ToastModule,
    ProgressSpinnerModule
  ],
  providers: [DataTransferService, DialogService, MessageService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
