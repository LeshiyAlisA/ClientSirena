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
    title: 'People',
    store: 'Struct',
    columns: [
        { xtype: 'treecolumn', header: 'Name', dataIndex: 'title', flex: 1 }
    ]


});
