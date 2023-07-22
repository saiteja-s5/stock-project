import { Component } from '@angular/core';
import { DataTransferService } from '../../services/data-transfer.service';

@Component({
  selector: 'app-scrolling-banner',
  templateUrl: './scrolling-banner.component.html',
  styleUrls: ['./scrolling-banner.component.css']
})
export class ScrollingBannerComponent {

  content = '';

  constructor(private dataService: DataTransferService) {
    this.dataService.getCurrentStockHoldingsQuote().subscribe(fetchedQuotes => {
      fetchedQuotes.forEach(quote => this.content += "[" + quote.symbol + " " + quote.regularMarketChangePercent.toFixed(2) + "% " + quote.regularMarketChange.toFixed(2) + "] ")
    });
    this.dataService.getMutualFundQuote('0P0000XVUH').subscribe(quote => {
      this.content += "[" + quote.shortName + " " + quote.regularMarketChangePercent.toFixed(2) + "% " + quote.regularMarketChange.toFixed(2) + "] "
    });
  }

}
