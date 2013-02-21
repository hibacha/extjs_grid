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
    stores:['book'],
    models:['book'],
    init:function(){
     this.control({
       'button[text="test button"]':{
         click:this.onClick
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