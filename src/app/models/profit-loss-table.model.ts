export interface ProfitLossTableRow{
    stockName:string;
    quantity:number;
    buyDate:Date;
    buyPrice:number;
    buyValue:number;
    sellDate:Date;
    sellPrice:number;
    sellValue:number;
    holdDuration:string;
    profitOrLoss:number;
	perReturn:number;
	percentReturnperMonth:number;
}