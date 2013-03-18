Ext.define('wodegrid.model.weatherRecord', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'city', type: 'string' },
        { name: 'temp_C', type: 'float' },
        { name: 'temp_F', type: 'auto' },
        { name: 'wdate', type: 'date' }
    ]
});

