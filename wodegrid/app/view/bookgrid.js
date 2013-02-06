// var store=Ext.create('Ext.data.Store', {
//     storeId:'simpsonsStore',
//     fields:['name', 'email', 'phone'],
//     data:{'items':[
//         { 'name': 'Lisa',  "email":"lisa@simpsons.com",  "phone":"555-111-1224"  },
//         { 'name': 'Bart',  "email":"bart@simpsons.com",  "phone":"555-222-1234" },
//         { 'name': 'Homer', "email":"home@simpsons.com",  "phone":"555-222-1244"  },
//         { 'name': 'Marge', "email":"marge@simpsons.com", "phone":"555-222-1254"  }
//     ]},
//     proxy: {
//         type: 'memory',
//         reader: {
//             type: 'json',
//             root: 'items'
//         }
//     }
// });
Ext.require('Ext.grid.RowNumberer');
Ext.define('wodegrid.view.bookgrid', {
	extend:'Ext.grid.Panel',
	alias:'widget.bookgrid',
    title: 'Simpsons',
    store: 'book',
    initComponent:function(){
         this.store='book';
         this.columns=[ Ext.create('Ext.grid.RowNumberer'),
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone' }
        ];
             
        this.callParent(arguments);
    },
    
    height: 200,
    width: 400
});