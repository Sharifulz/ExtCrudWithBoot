/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('ThemeExt.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'ThemeExt',

        loremIpsum: '<center><h1>LIVERPOOL FC</h1><hr></center><center><p>The club was founded in 1892 following a split from Everton F.C. and joined the Football League in 1893. The appointment of Tom Watson as manager resulted in the clubs first successful period, in which they won two League Championships. Two League Championships were won in the 1920s and a further one was won in 1947. Following the clubs fortunes declined and they were relegated to the Second Division in 1954.</p><img src="/resources/lvpoop.jpg" height:"300px" width:"550px"></center>',
        loremIpsum2: '<center><img src="/resources/lvpoop.jpg" height:"300px" width:"550px"></center>'
    }

    //TODO - add data, formulas and/or methods to support your view
});
