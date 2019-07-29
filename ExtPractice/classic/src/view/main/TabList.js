/**
 * This view is an example list of people.
 */
Ext.define('ThemeExt.view.main.TabList', {
    extend: 'Ext.tab.Panel',
    xtype: 'tabList',


    title: 'TAB PANEL',
   buttons: [{
            text: 'ADD NEW',
            iconCls: 'x-fa fa-plus',
            scale: 'large',
            listeners:{
                click:function(){
                  var win = Ext.create('Ext.Window', {
                extend: 'Ext.window.Window',
                title: 'Student Information',
                iconCls: 'x-fa fa-users',
                layout:'form',
                xtype:'form',
                width:400,
                height:160,
                plain: true,

    items: [
    {
        xtype : 'textfield',
        fieldLabel: 'Name',
        name:'name'
    },
    {
        xtype : 'textfield',
        fieldLabel: 'Email',
        name:'email'
    },
    {
        xtype : 'textfield',
        fieldLabel: 'Password',
        name:'location'
    }
],
    dockedItems:[
    {
    xtype:'toolbar',
    dock: 'bottom',
    ui:'footer',
    items:[
    {
    xtype:'button',
    text:'Cancel',
        handler:function(){
        win.close();
        }
    },'->',{
    xtype:'button',
    text:'Save',
    //Saving an issue starts from here
    listeners:{
    click:function()
    {
        var name= this.up('window').down('textfield[name=name]').getValue();
        var email= this.up('window').down('textfield[name=email]').getValue();
        var locs= this.up('window').down('textfield[name=location]').getValue();
       
        var tempJob = {
            id: -1,
            name: email,
            email: locs,
        };
       // Ext.toast("Name : "+tempJob.sname+"<br>Email: "+tempJob.semail+"<br>Location: "+tempJob.slocks);
        Ext.Ajax.request({
            url : 'api/save',                                                                                
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
        },
        {
            text: '',
            scale: 'large',
            iconCls: 'x-fa fa-bell',
            handler: function() {
            Ext.Msg.alert('Message', 'No Message Found', Ext.emptyFn);
        }
        }
        ]

  

});
