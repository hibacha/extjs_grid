Ext.define("wodegrid.store.weatherForecast",{
    extend:'Ext.data.Store',
    model:'wodegrid.model.weatherForecast',
    autoLoad: true,
   /*  proxy: {
        type: 'ajax',
        url: 'app/data/weatherData.json',
        reader: {
            type: 'json',
            root: 'data.weather'
        }
    }*/

});