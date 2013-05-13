Ext.define("wodegrid.view.WeatherForecastView", {
    extend: 'Ext.grid.Panel',
    alias: 'widget.forecastView',
    title: 'Weather Report',
    model: 'weatherForecast',
    store: 'weatherForecast',
    columns: [{
                dataIndex: 'date',
                text: "date"
            }, {
                dataIndex: "precipMM",
                text: "precipMM"
            }, {
                dataIndex: "tempMaxC",
                text: "tempMaxC"
            }, {
                dataIndex: "tempMaxF",
                text: "tempMaxF"
            }
        ]
 
});