
var tab2_outter_panel = Ext.create("Ext.panel.Panel", {
    items: [{
        xtype: 'button',
        text: 'btn1'
    }],
    id: 'zhenId',
    itemId: 'wow1',
    title: 'panel2',
    width: '50%',
    height: 500,
    frame: true,
    listeners: {
        render: function (me) { /*tab2_outter_panel.setLoading(true);*/
            console.log('beforerender');
        },
        afterrender: function () {
            console.log("afterrender");
        }
    }
});


tab2_outter_panel.add(new Ext.form.field.Text({
    id: "id-001",
    fieldLabel: 'Name'
}));


var subpanel1 = {
    xtype: 'panel',
    title: 'panel-sub1',
    height: 100,
    width: '10%',
    collapsed: true
};
var subpanel2 = {
    xtype: 'panel',
    title: 'panel-sub2',
    height: 100,
    width: '10%',
    collapsed: false
};
var subpanel3 = {
    xtype: 'panel',
    title: 'panel-sub3',
    height: 100,
    width: '10%',
    collapsed: true
};

var panel = {
    xtype: 'panel',
    title: "accordion",
    layout: "accordion",
    animate: true,
    height: 700,
    items: [subpanel1, subpanel2, subpanel3]
};
Ext.define('wodegrid.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires: [
        'Ext.tab.Panel',
        'Ext.layout.container.Border',
        'wodegrid.view.Main',
        'wodegrid.view.bookgrid',
        'wodegrid.store.book',
        'wodegrid.view.DetailFormPanel',
        'wodegrid.view.SomeView',
        'wodegrid.store.weatherRecord'],

    layout: {
        type: 'border'
    },
    items: [{
        region: 'west',
        xtype: 'panel',
        title: 'west',
        width: 150
    }, {
        region: 'center',
        xtype: 'tabpanel',
        items: [{
            title: 'Center Tab 1',
            html: "<b>BOLD</b>",
            items: [{
                xtype: 'button',
                text: 'test button'
            }, {
                xtype: 'myview'
            }, {
                xtype: 'bookgrid'
            }, {
                xtype: 'DetailFormPanel'
            }]
        }, {
            title: 'Center Tab 2',
            html: '<B>TAB2</B>',
            items: [tab2_outter_panel]
        }, {
            title: "tab3",
            items: [panel]
        }, {
            title: "Weather Report",
            items: [{
                xtype: 'label',
                forId: 'myFieldId',
                text: 'My Awesome Field',
                margin: '0 0 0 10'
            }, {
                xtype: 'someview'
            }]
        }]
    }]
});