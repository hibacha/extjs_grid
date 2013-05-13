
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
    collapsible:true,
    split:true,
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
         //   'wodegrid.store.book',
            'wodegrid.view.DetailFormPanel',
            'wodegrid.view.SomeView',
          // 'wodegrid.store.weatherRecord',
            'wodegrid.view.WeatherForecastView',
            'wodegrid.view.borderView'
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
                            margin: '100 10 0 10'
                        }, {
                            xtype: 'someview',
                            height: 200
                        },{
                            xtype:'forecastView'
                        },{xtype:'button',
                           text:'Ajax Load'
                        },{
                        	xtype:'button',
                        	text:'C/F'
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
                            height: 500,
                            listeners: {
                                'show': function (me) {
                                var imageComponent = me.query("panel[id='imageCt']")[0].child("image");
                                console.log(me.getComponent(0));
                                //var imageComponent = me.getComponent('#imageCt');
                                // var imageComponent = me.query("panel[id='imageCt']")[0].items.getAt(0);
                                // var imageComponent = me.query("panel[id='imageCt'] image")[0];
                                    imageComponent.getEl().dom.src="http://www.sencha.com/img/20110215-feat-html5.png";
                                    console.log("fire show event");
                                },
                                'afterrender':function(me){
                                    console.log("after render");
                                     
                                }
                            },
                            layout:'anchor',
                            items: [{
                            		
                                    anchor:'80% 50%',
									id:'panel_ct',
                                    xtype: 'panel',
                                    clsBase: 'x-plain',
                                    layout: "column",
                                    border: false,
                                    items: [{
                                            frame: true,
                                            columnWidth: 0.4,
											border: false,
                                            items: [{
                                                    xtype: 'textfield',
                                                    fieldLabel: 'text'
                                                }
                                            ]

                                        }, {
                                            frame: true,
                                            columnWidth: 0.4,
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
                                	anchor: '70% 30%',
                                    id: 'imageCt',
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
                },{
                  xtype:'borderView'
                }
            ]
        }
    ]
});