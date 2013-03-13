Ext.define('wodegrid.model.WeatherRecord', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'city', type: 'string' },
        { name: 'tempC', type: 'float' },
        { name: 'temp_F', type: 'auto' },
        { name: 'wdate', type: 'date' }
    ]
});

