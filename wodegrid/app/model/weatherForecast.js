Ext.define('wodegrid.model.weatherForecast', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'date', type: 'date' },
        { name: 'precipMM', type: 'float' },
        { name: 'tempMaxC', type: 'float' },
        { name: 'tempMaxF', type: 'float' },
        { name: 'tempMinC', type: 'float' },
        { name: 'tempMinF', type: 'float' }
    ],
    proxy: {
        type: 'ajax',
        url: 'app/data/weatherData.json',
        reader: {
            type: 'json',
            root: 'data.weather'
        }
    }
});

