// Ext.namespace("Nash.util");
// Ext.namespace("Org.ext");
// Nash.util.StringUtil={
// 
// 	upperCase:function(str){
//     return str;
//    }
// 
// };
//var su=wodegrid.utility.StringUtil;
Ext.define('wodegrid.controller.Main', {
    extend: 'Ext.app.Controller',
    stores:['book','weatherRecord','weatherForecast'],
  //  models:['book','weatherRecord','weatherForecast'],
    init:function(){
     this.control({
       'button[text="test button"]':{
         click:this.onClick
       },
       'button[text="Ajax Load"]':{
          click:function(){
            Ext.getStore('weatherRecord').load();
            Ext.ComponentQuery.query('viewport someview')[0];
          }
       },
       'button[text="btn1"]':{
        click:function(){
          var _windows=Ext.create('Ext.window.Window', {
          title: 'Hello',
    	  height: 200,
          width: 400,
          modal:true,
          id:'mywindows',
          layout: 'fit',
          closeAction:'destroy',
          listeners:{
            "destroy":function(){
              console.log('destroy');
            },
            "close":function(){
               console.log('close');
            },
            "hide":function(){
               console.log('hide');
            }
          },
          items: {  // Let's put an empty grid in just to illustrate fit layout
             xtype: 'grid',
             border: false,
             columns: [{header: 'World'}],                 // One header just for show. There's no data,
             store: Ext.create('Ext.data.ArrayStore', {}), // A dummy empty data store
             listeners: {
                click: {
                  element: 'el', //bind to the underlying el property on the panel
                  fn: function(e){ console.log(e); }
                 },
                dblclick: {
                  element: 'body', //bind to the underlying body property on the panel
                  fn: function(){ console.log('dblclick body'); }
                }
              }
           }
          }).show();
        
        }
       },
       'bookgrid':{
          itemclick:this.onItemClick
       },
       'panel[id="wow1"]':{render:function(){alert("zz");}
       }
     });
    },
    onItemClick:function(){
       //console.log(Ext.ComponentManager.getCount());
       
       var bookgrid=Ext.ComponentQuery.query('grid')[0];
       var selected_items=bookgrid.getSelectionModel().getSelection()[0];
       
       Ext.ComponentQuery.query('DetailFormPanel')[0].loadRecord(selected_items);
    },
    onClick:function(){
      
      var low=su.lowerCase();
      alert(low);
      
      var bookgrid=Ext.ComponentQuery.query('grid')[0];
      var selected_items=bookgrid.getSelectionModel().getSelection();
      Ext.each(selected_items,function(item,index){
         console.log("name is "+item.get("name"));
      });
        
    }
});