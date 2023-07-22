export const Utility = {

    today: new Date(),
    stockStartDate: new Date("2021-01-18"),
    mutualFundStartDate: new Date("2021-08-14"),
    dividendStartDate: new Date("2021-03-10"),
    fundStartDate: new Date("2021-01-18"),
    soldStartDate: new Date("2021-01-18"),
    miscTableKey: 'MASTER-KEY',
    formFieldWidth: 400,
    snackBarDuration: 1000,
    formatDate: function (date: Date) {
        let d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [year, month, day].join('-');
    },
    formatNumber: function (value: number, places?: number) {
        let formattedNumber = value.toLocaleString();
        let realAndDecimal = formattedNumber.split(".");
        if (places) {
            return realAndDecimal[0] + "." + realAndDecimal[1].substring(0, places);
        }
        return realAndDecimal[0];
    }
};