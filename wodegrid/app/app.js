Ext.Loader.setConfig({
        enabled : true
    });
Ext.require('Ext.grid.plugin.RowEditing');


Ext.application({
    views: ["WeatherForecastView","SomeView"],

    models: ["weatherForecast","WeatherRecord","User","Customer"],

    controllers: ["Central","Main"],

    name: 'wodegrid',

    autoCreateViewport: true,
    init:function(){
    console.log("app init");
    },
    launch:function(){
    console.log("app launch");
    }
});

var su;
