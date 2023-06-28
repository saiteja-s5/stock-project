export interface StockDashboard{
    stockInvestmentValue:number;
    stockCurrentValue:number;
    stockCurrentReturn:number,
    stockCurrentReturnPercent:number,
    stockLastTransactionOn:Date;
    stockTableUpdatedOn:Date
}