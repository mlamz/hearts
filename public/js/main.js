require.config({
    paths: {
        jquery:     'libs/jquery/jquery',
        underscore: 'libs/underscore/underscore',
        backbone:   'libs/backbone/backbone'
    }

});

require(['view-coordinator'], 
		function(viewCoordinator) {
            viewCoordinator.initialize();
		});