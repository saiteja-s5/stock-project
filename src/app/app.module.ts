import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { AppRoutingModule } from './app-routing.module';
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

import { AppComponent } from './app.component';
import { StockFormComponent } from './components/stock-form/stock-form.component';
import { MutualFundFormComponent } from './components/mutual-fund-form/mutual-fund-form.component';
import { ProfitLossFormComponent } from './components/profit-loss-form/profit-loss-form.component';
import { FundFormComponent } from './components/fund-form/fund-form.component';
import { DividendFormComponent } from './components/dividend-form/dividend-form.component';

import { DataTransferService } from './services/data-transfer.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StockModalButtonComponent } from './components/stock-modal-button/stock-modal-button.component';
import { MutualModalButtonComponent } from './components/mutual-modal-button/mutual-modal-button.component';
import { DividendModalButtonComponent } from './components/dividend-modal-button/dividend-modal-button.component';
import { FundModalButtonComponent } from './components/fund-modal-button/fund-modal-button.component';
import { ProfitLossModalButtonComponent } from './components/profit-loss-modal-button/profit-loss-modal-button.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SuccessSnackbarComponent } from './components/success-snackbar/success-snackbar.component';

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
    SpinnerComponent,
    SuccessSnackbarComponent
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
    BrowserAnimationsModule
  ],
  providers: [DataTransferService],
  bootstrap: [AppComponent]
})
export class AppModule { }
