
Ext.require('Ext.grid.RowNumberer');


Ext.define('wodegrid.view.bookgrid', {
	extend:'Ext.grid.Panel',
	alias:'widget.bookgrid',
    title: 'Simpsons',
    store: 'book',
    require:'Ext.selection.CheckboxModel', 
    selType: 'cellmodel',
    selModel: Ext.create('Ext.selection.CheckboxModel'), //1
    plugins: [
       Ext.create('Ext.grid.plugin.CellEditing', {
          clicksToEdit: 1
       })
   ],
    initComponent:function(){
         this.store='book';
         this.columns=[ Ext.create('Ext.grid.RowNumberer'),
        { text: 'Name',  dataIndex: 'name',editor: {
         xtype:'textfield',
         allowBlank:false
      }},
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone' }
        ];
             
        this.callParent(arguments);
    },
    
    height: 200,
    width: 400
});