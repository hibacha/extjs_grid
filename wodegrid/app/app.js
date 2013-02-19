Ext.Loader.setConfig({
        enabled : true
    });
Ext.require('Ext.grid.plugin.RowEditing');
Ext.require("wodegrid.utility.StringUtil");

Ext.application({
    models: ["Customer"],

    controllers: ["Main"],

    name: 'wodegrid',

    autoCreateViewport: true
});

var su;
