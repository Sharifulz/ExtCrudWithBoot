Ext.define('ThemeExt.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    fields: [
        'name', 'email', 'phone'
    ],

    data: { items: [
        { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444" }
    ]},

    proxy: {
        type: '/api/data',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
