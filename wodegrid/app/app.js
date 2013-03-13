Ext.Loader.setConfig({
        enabled : true
    });
Ext.require('Ext.grid.plugin.RowEditing');


Ext.application({
    views: ["SomeView"],

    models: ["WeatherRecord","User","Customer"],

    controllers: ["Central","Main"],

    name: 'wodegrid',

    autoCreateViewport: true,
    init:function(){
    console.log("app init");
    },
    launch:function(){
    console.log("launch");
    }
});

var su;
