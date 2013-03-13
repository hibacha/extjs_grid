Ext.define('wodegrid.store.book', {
	extend:'Ext.data.Store',
    model:'wodegrid.model.book',
  //   data:{'items':[
//         { 'name': 'ZZ',  "email":"lisa@simpsons.com",  "phone":"555-111-1224"  },
//         { 'name': 'Bart',  "email":"bart@simpsons.com",  "phone":"555-222-1234" },
//         { 'name': 'Homer', "email":"home@simpsons.com",  "phone":"555-222-1244"  },
//         { 'name': 'Marge', "email":"marge@simpsons.com", "phone":"555-222-1254"  }
//     ]},
   //  proxy: {
//         type: 'memory',
//         reader: {
//             type: 'json',
//             root: 'items'
//         }
//     },
     autoLoad: true,
     proxy: {
        type: 'ajax',
        url: 'app/data/data.json',
        reader: {
            type: 'json',
            root: 'items'
        }
    }
});