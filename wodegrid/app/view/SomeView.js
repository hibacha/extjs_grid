
Ext.define("wodegrid.view.SomeView", {
    extend: 'Ext.grid.Panel',
    alias: 'widget.someview',
    title: 'Weather Report',
	store: 'weatherRecord',
	viewConfig: {
    getRowClass: function(record, rowIndex, rowParams, store){
        console.log(record.get('temp_C'));
        return "dd";
    	}
	},
	columns:[{
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
            },{ dataIndex: "temp_C",
            	text: "temperat C"
            },{
            	//xtype:'templatecolumn',
            	text:'F',
            	hidden: true,
            	renderer:function(a,b,c){
            	   return parseFloat(c.get('temp_C'))*9/5+32;
            	}
            	
            },{ dataIndex: "weatherIconUrl",
                text: "image",
                renderer:function(value, record){
                  return "<img src='"+value[0].value+"'/>";
                }
            }
        ]
   
});