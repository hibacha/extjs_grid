Ext.define('wodegrid.model.weatherRecord', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'cloudcover', type: 'float' },
        { name: 'humidity', type: 'float' },
        { name: 'observation_time', type: 'string' },
        { name: 'precipMM', type: 'float' },
        { name: 'pressure',type:'float'},
        { name: 'temp_C', type: 'float'},
        { name: 'temp_F', type: 'float'},
        { name: 'visibility', type: 'float'},
        { name: 'weatherDesc', type: 'auto'},
        { name: 'weatherIconUrl', 
          type: 'auto'
        }
    ],
    proxy: {
      type: 'scripttag',
      url : 'http://free.worldweatheronline.com/feed/weather.ashx?q=BOSTON,USA&format=json&num_of_days=2&key=9e85ce10ff000457131103',
      
      reader: {
         type: 'json',
         root: 'data.current_condition'
      }
   }
});

