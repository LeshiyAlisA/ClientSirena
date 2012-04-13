Ext.define('AM.view.Alerts' ,{
    extend: 'Ext.panel.Panel',
    alias : 'widget.alerts',
    layout:'fit',
    items: [{
        xtype: 'panel',  // тип панели
        html: 'North',   // HTML-код содержимого панели
        height:100}
    ]


});