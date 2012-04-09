Ext.application({
    name: 'AM',
    appFolder: '/static/app',

    controllers: [
        'Buttons',
        'Users',
        'AddPeople',
        'Struct'],

    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'column',
            items: [{
                xtype: 'struct',
                width: 200,
                height:'100%'
            },{
                xtype: 'userlist',
                width: 900,
                height:'100%'
            }]
        });    
    }
});