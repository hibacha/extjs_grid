Ext.define("wodegrid.view.SomeView", {
    extend:'Ext.grid.Panel',
    alias:'widget.someview',
    title:'Weather Report',
  
    initComponent:function(){ 
        
        this.store='weatherRecord',
        this.columns=[{dataIndex:'city',text:"CITY"},{dataIndex:"temp_F",text:"F"},{dataIndex:"temp_C",text:"C"}];
        this.callParent(arguments);
    }
        
});
// Ext.require('Ext.grid.RowNumberer');
// 
// 
// 
// var rowEditing=Ext.create('Ext.grid.plugin.RowEditing', {
//           clicksToEdit: 1
//        });
// var tmp11;      
// 
// 
// 
// Ext.define('wodegrid.view.bookgrid', {
// 	extend:'Ext.grid.Panel',
// 	alias:'widget.bookgrid',
//     title: 'Simpsons',
//     store: 'book',
//     id:'mybookgrid',
//     require:'Ext.selection.CheckboxModel', 
//     selType: 'rowmodel',
//     plugins: rowEditing, 
//     dockedItems:[{
//      xtype:'toolbar',
//      items:[{
//       text:'add',
//       handler: function(){
//         rowEditing.cancelEdit();
//         var r=Ext.ModelManager.create({name:'New',phone:'1111',email:'mail'},'wodegrid.model.book');
//         var store=Ext.ComponentQuery.query('grid')[0].getStore();
//         store.insert(0,r);
//         rowEditing.startEdit(0,0);
//         
//       }
//      },{
//         text:'delete',
//         handler:function(){
//         
//         }
//      }]
//    }],
//     initComponent:function(){
//          this.store='book';
//          this.columns=[ Ext.create('Ext.grid.RowNumberer'),
//         { text: 'Name',  dataIndex: 'name',editor: {
//          xtype:'textfield',
//          allowBlank:false
//       }},
//         { text: 'Email', dataIndex: 'email', flex: 1,editor: {
//          xtype:'textfield',
//          allowBlank:false
//       } },
//         { text: 'Phone', dataIndex: 'phone' }
//         ];
//              
//         this.callParent(arguments);
//     },
//     
//     height: 200,
//     width: 400
// });