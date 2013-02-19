Ext.define("wodegrid.view.DetailFormPanel",{
    extend:'Ext.form.Panel',
    alias:'widget.DetailFormPanel',
    defaultType:'textfield',
    initComponent : function() {
        this.items = this.buildItems();
        this.callParent();
    },
    buttons:[{text:"submit"}],
    buildItems : function() {
        return [
            {
                fieldLabel : 'Name',
                name       : 'name'
            },
            {
                fieldLabel : 'Email',
                name       : 'email'
            },
            {
                fieldLabel : 'Phone',
                name       : 'phone'
            }
        ];
    }
    
});