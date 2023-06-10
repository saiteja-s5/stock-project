import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { environment } from '../environments/environment';
import { Stock } from '../models/stock.model';
import { Observable, map } from 'rxjs';
import { MutualFund } from '../models/mutualFund.model';
import { Fund } from '../models/fund.model';
import { ProfitLoss } from '../models/profit-loss.model';
import { Dividend } from '../models/dividend.model';
import { CompanyNameDropdown } from 'src/app/models/company-name-dropdown.model';
import { StockTableRow } from '../models/stock-table.model';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  constructor(private http: HttpClient) { }

  private apiUrl = environment.API_URL;
  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  addStock(stock: Stock): Observable<Stock> {
    return this.http.post<Stock>(this.apiUrl + 'stocks', stock, { headers: this.headers });
  }

  addMutualFund(mutualFund: MutualFund): Observable<MutualFund> {
    return this.http.post<MutualFund>(this.apiUrl + 'mutual-funds', mutualFund, { headers: this.headers });
  }

  addFund(fund: Fund): Observable<Fund> {
    return this.http.post<Fund>(this.apiUrl + 'funds', fund, { headers: this.headers });
  }

  addProfitLoss(profitLoss: ProfitLoss): Observable<ProfitLoss> {
    return this.http.post<ProfitLoss>(this.apiUrl + 'profit-losses', profitLoss, { headers: this.headers });
  }

  addDividend(dividend: Dividend): Observable<Dividend> {
    return this.http.post<Dividend>(this.apiUrl + 'dividends', dividend, { headers: this.headers });
  }

  getStocksForTable(): Observable<StockTableRow[]> {
    return this.http.get<StockTableRow[]>(this.apiUrl + 'stocks', { headers: this.headers });
  }

  getMutualFunds(): Observable<MutualFund[]> {
    return this.http.get<MutualFund[]>(this.apiUrl + 'mutual-funds', { headers: this.headers });
  }

  getFunds(): Observable<Fund[]> {
    return this.http.get<Fund[]>(this.apiUrl + 'funds', { headers: this.headers });
  }

  getProfitLosses(): Observable<ProfitLoss[]> {
    return this.http.get<ProfitLoss[]>(this.apiUrl + 'profit-losses', { headers: this.headers });
  }

  getDividends(): Observable<Dividend[]> {
    return this.http.get<Dividend[]>(this.apiUrl + 'dividends', { headers: this.headers });
  }

  getCompanyNameDropDowns(): Observable<CompanyNameDropdown[]> {
    return this.http.get<CompanyNameDropdown[]>(this.apiUrl + 'company-dropdowns', { headers: this.headers });
  }

}
