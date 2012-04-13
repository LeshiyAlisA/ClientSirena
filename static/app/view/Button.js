Ext.define('AM.view.Button' ,{
    extend: 'Ext.panel.Panel',
    alias : 'widget.buttonlist',
    layout:'fit',
    tbar: [{
        text: 'Добавить сотрудника'

    },{
        text: 'Изменить данные сотрудника'
    },{
        text: 'Удалить сотрудника'
    }]
    
});