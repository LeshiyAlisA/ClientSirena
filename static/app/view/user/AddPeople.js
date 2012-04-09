/**
 * Created with PyCharm.
 * User: leshiy
 * Date: 07.04.12
 * Time: 17:47
 * To change this template use File | Settings | File Templates.
 */
Ext.define('AM.view.user.AddPeople', {
    extend: 'Ext.window.Window',
    alias : 'widget.addpeople',
    title : 'Добавить сотрудника',
    bodyStyle:'padding:5px 5px 0',
    width: 350,
    fieldDefaults: {
        msgTarget: 'side',
        labelWidth: 100
    },
    defaultType: 'textfield',
    defaults: {
        anchor: '100%'
    },
    items: [{
        fieldLabel: 'Предприятие',
        name: 'company',
        allowBlank:false
    },{
        fieldLabel: 'Отдел',
        name: 'department',
        allowBlank:false
    },{
        fieldLabel: 'Табельный номер',
        name: 'tubNum',
        allowBlank:false
    },{
        fieldLabel: 'Фамилия',
        name: 'lastName',
        allowBlank:false
    },{
        fieldLabel: 'Имя',
        name: 'firstName',
        allowBlank:false
    },{
        fieldLabel: 'Отчество',
        name: 'middleName',
        allowBlank:false
    },{
        fieldLabel: 'Паспорт',
        name: 'passport',
        allowBlank:false
    },{
        fieldLabel: 'Серия и номер паспорта',
        name: 'numberPassport',
        allowBlank:false
    },{
        fieldLabel: 'Дата выдачи паспорта',
        xtype : 'datefield',
        name: 'datePassport',
        allowBlank:false
    },{
        fieldLabel: 'Адрес',
        name: 'address',
        allowBlank:false
    },{
        fieldLabel: 'Номер телефона',
        name: 'phone',
        allowBlank:false
    }],
    autoShow: true,

    initComponent: function() {

        this.buttons = [
            {
                text: 'Save',
                action: 'save'
            },
            {
                text: 'Cancel',
                scope: this,
                handler: this.close
            }
        ];

        this.callParent(arguments);
    }
});