import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { environment } from '../environments/environment';
import { Stock } from '../models/stock.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  constructor(private http:HttpClient) { }

  private apiUrl = environment.API_URL;
  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  addStock(stock:Stock):Observable<Stock>{
    return this.http.post<Stock>(this.apiUrl+'stocks/', stock, {headers:this.headers});
  }

  getStocks():Observable<Stock[]>{
    return this.http.get<Stock[]>(this.apiUrl+'stocks/', {headers:this.headers});
  }

  

}
