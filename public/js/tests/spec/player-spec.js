define([	
	'underscore'
,	'../../models/card'
, '../../collections/hand'
,	'player'
], 
  function(_, Card, Hand, Player) {
  	describe("Player", function(){
  		it("should be initialised with a name", function(){
  			var player = new Player("bob");
  			expect(player.name).toEqual("bob");
  		});


  	})
  }
)

