Ext.define('wodegrid.controller.Main', {
    extend: 'Ext.app.Controller',
    stores:['book'],
    models:['book'],
    init:function(){
     this.control({
       'button[text="test button"]':{
         click:this.onClick
       }
     });
    },
    onClick:function(){
      var bookgrid=Ext.ComponentQuery.query('grid')[0];
      var selected_items=bookgrid.getSelectionModel().getSelection();
      Ext.each(selected_items,function(item,index){
         console.log("name is "+item.get("name"));
      });
        
    }
});