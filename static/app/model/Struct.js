/**
 * Created with PyCharm.
 * User: leshiy
 * Date: 10.05.12
 * Time: 15:41
 * To change this template use File | Settings | File Templates.
 */
Ext.define('AM.model.Struct', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'id', type: 'int' },
        { name: 'title', type: 'string' }
    ],
    proxy: {
        type: 'ajax',
        api: {
            create: 'http://localhost:8000/api/tree'
        }
    }
});
