Ext.define('AM.controller.AddPeople', {
    extend: 'Ext.app.Controller',
    views: ['user.AddPeople'],
    editUser: function(grid, record) {
        var view = Ext.widget('useredit');
    }
});