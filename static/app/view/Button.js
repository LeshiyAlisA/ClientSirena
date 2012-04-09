Ext.define('AM.view.Button' ,{
    extend: 'Ext.panel.Panel',
    alias : 'widget.buttonlist',

    width: 200,
    title: 'Меню',
    layout: {
        type: 'vbox',
        align: 'stretch',
        padding: 5
    },

    items: [{
        xtype: 'button',
        text: "Новый",
        handler:function() {
            var view = Ext.widget('addpeople');
        }
    },{
        xtype: 'splitter'
    },{
        xtype: 'button',
        text: "Изменить"

    },{
        xtype: 'splitter'   // A splitter between the two child items
    },{
        xtype: 'button',
        text: "Удалить"}],
    renderTo: Ext.getBody()      
    
});