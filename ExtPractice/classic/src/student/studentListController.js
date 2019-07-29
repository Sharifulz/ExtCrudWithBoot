Ext.define('ThemeExt.view.student.studentListController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.studentListController',

    getDeletableData: function (grid, rowIndex, colIndex) {
        var rec = grid.getStore().getAt(rowIndex);

       // Ext.Msg.alert('Approve', rec.get('name')+" "+ rec.get('id')+" "+ rec.get('email'));
        var name=rec.get('name');
        var email=rec.get('email');
        var id= rec.get('id');
        var tempJob = {
            id: id,
            name: name,
            email: email,
        };
        Ext.Msg.alert("++++++++++++"+tempJob.name);
       // Ext.toast("Name : "+tempJob.sname+"<br>Email: "+tempJob.semail+"<br>Location: "+tempJob.slocks);
        Ext.Ajax.request({
            url : 'api/delete', 
            method:"DELETE",                                                                               
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
    }
   
});
