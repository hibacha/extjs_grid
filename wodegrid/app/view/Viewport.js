
var tab2_outter_panel=Ext.create("Ext.panel.Panel",{items:[{xtype:'button',text:'btn1'}],id:'zhenId',itemId:'wow1',title:'panel2',width:'50%',height:500,frame:true, listeners: {
        render:function(me){ tab2_outter_panel.setLoading(true);console.log('beforerender');},afterrender:function(){ console.log("afterrender");}
    }});

Ext.define('wodegrid.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border',
        'wodegrid.view.Main',
        'wodegrid.view.bookgrid',
        'wodegrid.store.book',
        'wodegrid.view.DetailFormPanel'
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
            	   {xtype:'bookgrid'},
            	   {xtype:'DetailFormPanel'}]
        },{
           title:'Center Tab 2',
           html:'<B>TAB2</B>',
           items:[tab2_outter_panel]
        }]
    }]
});