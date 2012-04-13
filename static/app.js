Ext.application({
    name: 'AM',
    appFolder: '/static/app',

    controllers: [
        'Buttons',
        'Users',
        'Alerts',
        'AddPeople',
        'Struct'],

    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'border',
            items: [{
                xtype:'buttonlist',
                region: 'north'
            },{
                xtype: 'struct',
                width: 200,
                region:'west',
                collapsible: true,
                split:true,
                minSize:50
            },{
                xtype: 'userlist',
                region: 'center'

            },{
                xtype: 'alerts',
                region: 'south',
                title:'Сообщения',
                collapsible: true,
                split:true,
                minSize:50

            }]
        });    
    }
});