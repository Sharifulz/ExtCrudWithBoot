Ext.define('ThemeExt.view.student.studentList', {
    extend: 'Ext.grid.Panel',
    xtype: 'studentList',

    title: 'Student List',
    requires: [
        'ThemeExt.view.student.StudentViewModel'
    ],
    controller: 'studentListController',
    viewModel: { type: 'studentviewmodel' },
    reference: 'studentlistgrid',
    selType: 'rowmodel',
    selModel:
    {
        mode: 'SINGLE'
    },
    viewConfig:
    {
        stripeRows: true
    },
    listeners: {
        selectionchange: 'onSelectionChange'
    },
    bind: {
        store: '{StudentListStore}'
    },
    columns:
        [
            {
                text: "ID",
                dataIndex: 'id',
                width: 50
            },
            {
                text: "Name",
                dataIndex: 'name',
                width: 100
            },
            {
                text: "Email",
                flex: 1,
                dataIndex: 'email',
                editor:
                {
                    allowBlank: false
                }
            },
            {
                xtype: 'actioncolumn',
        width: 50,
        menuDisabled: true,
        sortable: false,

        items: [{
            iconCls: 'x-fa fa-trash white',
            handler: 'getDeletableData'
        }]
                
            }

        ],
    listeners:
    {
        itemdblclick: function (sender, record) {
            //console.log(record.data.name);
            var eid = record.data.id;
            var ename = record.data.name;
            var eemail = record.data.email;
            console.log("You have selected " + eid + " " + ename + " " + eemail);
            var win = Ext.create('Ext.Window', {
                extend: 'Ext.window.Window',
                title: 'Student Information',
                iconCls: 'x-fa fa-users',
                layout: 'form',
                xtype: 'form',
                width: 400,
                height: 160,
                plain: true,

                items: [
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Name',
                        name: 'name',
                        value: record.data['id']
                    },
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Email',
                        name: 'email',
                        value: record.data['name']
                    },
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Password',
                        name: 'location',
                        value: record.data['email']
                    }
                ],
                dockedItems: [
                    {
                        xtype: 'toolbar',
                        dock: 'bottom',
                        ui: 'footer',
                        items: [
                            {
                                xtype: 'button',
                                text: 'Cancel',
                                handler: function () {
                                    win.close();
                                }
                            }, '->', {
                                xtype: 'button',
                                text: 'Save',
                                //Saving an issue starts from here
                                listeners: {
                                    click: function () {
                                        var name = this.up('window').down('textfield[name=name]').getValue();
                                        var email = this.up('window').down('textfield[name=email]').getValue();
                                        var locs = this.up('window').down('textfield[name=location]').getValue();

                                        var tempJob = {
                                            id: name,
                                            name: email,
                                            email: locs,
                                        };
                                        // Ext.toast("Name : "+tempJob.sname+"<br>Email: "+tempJob.semail+"<br>Location: "+tempJob.slocks);
                                        Ext.Ajax.request({
                                            url: 'api/update',
                                            method: "PUT",
                                            headers: { 'Content-Type': 'application/json' },
                                            jsonData: tempJob,
                                            success: function (response) {
                                                Ext.Msg.alert('success');
                                                window.location.reload();

                                            },
                                            failure: function (response) {
                                                Ext.Msg.alert('fail');
                                            }
                                        });
                                        win.close();
                                    }
                                }
                            }
                        ]
                    }
                ]
            }).show();
        }
    }
});