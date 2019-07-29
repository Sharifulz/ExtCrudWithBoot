/**
 * This view is an example list of people.
 */
Ext.define('ThemeExt.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    ui: 'highlight',
    frame: true,

    requires: [
        'ThemeExt.store.Personnel'
    ],

    title: 'Personnel',

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});