/**
 * Created with PyCharm.
 * User: leshiy
 * Date: 07.04.12
 * Time: 18:16
 * To change this template use File | Settings | File Templates.
 */
Ext.define('AM.view.Struct' ,{
    extend: 'Ext.tree.Panel',
    alias : 'widget.struct',
    title: 'Структура',
    root: {
        text:"Структура охраны",
        expanded: true,
        children: [
            {
                expanded: true,
                text: "Сотрудники",
                children: [
                    {
                        text: 'ООО Рога и Копыта',
                        leaf: true
                    }

                ]
            },
            {
                expanded: true,
                text:"План объекта",
                children: [
                    {
                        text: 'Первый этаж',
                        leaf: true
                    },
                    {
                        text: 'Второй этаж',
                        leaf: true
                    }

                ]
            },{
                text:"Журнал событий",
                leaf: true
            }

        ]
    }


});
