/**
 * Created with PyCharm.
 * User: leshiy
 * Date: 10.05.12
 * Time: 15:42
 * To change this template use File | Settings | File Templates.
 */
Ext.define('AM.store.Struct', {
    extend: 'Ext.data.TreeStore',
    model: 'Struct',
    root: {
        name: 'People',
        expanded: true
    }
});