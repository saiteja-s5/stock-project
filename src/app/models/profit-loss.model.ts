export interface ProfitLoss{
    profitLossId:number;
    stockName:string;
    quantity:number;
    bought:{
        boughtDate:Date;
        boughtPrice:number;
    }
    sold:{
        soldDate:Date;
        soldPrice:number;
    }
}