
Ext.define('wodegrid.view.borderView', {
    extend: 'Ext.panel.Panel',
    title: 'border',
    alias: 'widget.borderView',
    layout: 'border',
    items: [{
            region: 'west',
            title: 'west',
            width: 100,
            collapsible: true
        }, {
            region: 'center',
            title: 'center'
        }, {
            region: 'east',
            title: 'east',
            width: 100,
            collapsible:true
        }
    ]
});