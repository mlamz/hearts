require.config({
    paths: {
        jquery:     	'libs/jquery/jquery',
        underscore: 	'libs/underscore/underscore',
        backbone:   	'libs/backbone/backbone',
        game: 			'game',
        deck: 			'collections/deck', 
        card: 			'models/card', 
        hand: 			'collections/hand', 
        gameError: 		'errors/game-error', 
        cardProperties: 'models/card-properties', 
        playerView:     'views/playerView', 
        messageView: 	'views/messageView', 
    }

});

require(['view-coordinator'], 
		function(viewCoordinator) {
            viewCoordinator.initialize();
		});