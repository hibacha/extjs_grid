
Ext.define("wodegrid.view.SomeView", {
    extend: 'Ext.grid.Panel',
    alias: 'widget.someview',
    title: 'Weather Report',

    initComponent: function () {

        this.store = 'weatherRecord',
        this.columns = [{
                dataIndex: 'cloudcover',
                text: "cloudcover"
            }, {
                dataIndex: "humidity",
                text: "humidity"
            }, {
                dataIndex: "observation_time",
                text: "observation_time"
            }, {
                dataIndex: "precipMM",
                text: "precipMM"
            },{ dataIndex: "pressure",
            	text: "pressure"
            },{ dataIndex: "weatherIconUrl",
                text: "image",
                renderer:function(value, record){
                  return "<img src='"+value[0].value+"'/>";
                }
            }
        ];
        this.callParent(arguments);
    }

});