Ext.define("wodegrid.store.weatherRecord",{
    extend:'Ext.data.Store',
    model:'wodegrid.model.weatherRecord',
    autoLoad: false
   /*  proxy: {
        type: 'ajax',
        url: 'app/data/weatherData.json',
        reader: {
            type: 'json',
            root: 'data.current_condition'
        }
    }*/

});