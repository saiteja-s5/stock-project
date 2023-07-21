export interface ProfitLossDashboard {
    profitLossEarnedOverall: number;
    overallBoughtAmount: number;
    overallSoldtAmount: number,
    overallProfitLossPercent: number,
    averageReturnPerTransaction: number,
    averageReturnPerTransactionPercent: number,
    profitLossLastTransactionOn: Date;
    profitLossTableUpdatedOn: Date
}