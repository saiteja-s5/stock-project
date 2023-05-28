export const Utility = {

    today: new Date(),
    stockStartDate: new Date("2021-01-18"),
    mutualFundStartDate: new Date("2021-08-14"),
    formFieldWidth: 400,
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
};