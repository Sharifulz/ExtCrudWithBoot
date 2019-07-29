Ext.define('ThemeExt.model.Student', {
    extend: 'Ext.data.Model',
    idProperty: 'Id',

    fields: [
        { name: 'id', type: 'number' },
        { name: 'name', type: 'string' },
        { name: 'email', type: 'string' },
    ]
});