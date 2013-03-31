
var tab2_outter_panel = Ext.create("Ext.panel.Panel", {
    items: [{
            xtype: 'button',
            text: 'button',
            handler: function (me) {
                alert(me.ownerCt.items.getAt(1).getValue());
            }
        }
    ],
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
            'wodegrid.store.weatherRecord',
            'wodegrid.view.WeatherForecastView'
    ],

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
                        }
                    ]
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
                        },{
                            xtype:'forecastView'
                        },{xtype:'button',
                           text:'Ajax Load'
                           
                        }
                    ]
                }, {
                    title: "windows layout",
                    items: [{
                            xtype: 'window',
                            title: 'Windows Form',
                            width: 800,
                            autoShow: true,
                            plain: true,
                            frame: false,
                            locked: "yes",
                            listeners: {
                                'show': function (me) {
                                var imageComponent = me.query("panel[id='imageCt']")[0].child("image");
                                // var imageComponent = me.query("panel[id='imageCt']")[0].items.getAt(0);
                                // var imageComponent = me.query("panel[id='imageCt'] image")[0];
                                    imageComponent.getEl().dom.src="http://www.sencha.com/img/20110215-feat-html5.png";
                                    console.log("fire show event");
                                },
                                'afterrender':function(me){
                                    console.log("after render");
                                     
                                }
                            },
                            layout: '',
                            items: [{
                                    width: '100%',

                                    xtype: 'panel',
                                    clsBase: 'x-plain',
                                    layout: "column",
                                    items: [{
                                            frame: true,
                                            columnWidth: 0.5,

                                            items: [{
                                                    xtype: 'textfield',
                                                    fieldLabel: 'text'
                                                }
                                            ]

                                        }, {
                                            frame: true,
                                            columnWidth: 0.5,
                                            layout: 'form',
                                            items: [{
                                                    xtype: 'textfield',
                                                    fieldLabel: 'text'
                                                }, {
                                                    xtype: 'datefield',
                                                    fieldLabel: 'DATE'
                                                }
                                            ]
                                        }
                                    ]
                                }, {
                                    id: 'imageCt',
                                    height: 300,
                                    bodyStyle: {
                                        background: '#ffc'
                                    },
                                    items: [{xtype:'image'}]
                                }
                            ],
                            buttons: [{
                                    text: 'confirm',
                                    handler: function (btn) {
                                        console.log(btn.text + '!')
                                    }
                                }, {
                                    text: 'cancel'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
});