Ext.define('wodegrid.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border',
        'wodegrid.view.Main',
        'wodegrid.view.bookgrid',
        'wodegrid.store.book'
    ],

    layout: {
        type: 'border'
    },

    items: [{
        region: 'west',
        xtype: 'panel',
        title: 'west',
        width: 150
    },{
        region: 'center',
        xtype: 'tabpanel',
        items:[{
            title: 'Center Tab 1',
            html: "<b>BOLD</b>",
            items:[{xtype:'button',text:'test button'},
            	   {xtype:'myview'},
            	   {xtype:'bookgrid'}]
        },{
           title:'Center Tab 2',
           html:'<B>TAB2</B>'
        }]
    }]
});