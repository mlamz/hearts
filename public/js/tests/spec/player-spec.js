define([	
	'underscore'
,	'../../models/card'
, '../../collections/hand'
,	'player'
,	'deck'
], 
  function(_, Card, Hand, Player, Deck) {
  	describe("Player", function(){
  		it("should be initialised with a name", function(){
  			var player = new Player("bob");
  			expect(player.name).toEqual("bob");
  		});

  		it("should allow a player to swap three cards with each other", function(){
  			var player = new Player("bob")
          ,   player2 = new Player("steve")
          ,   deck = new Deck();

  			player.hand = new Hand(deck);
  			player2.hand = new Hand(deck);

  			var card1 = player.hand.models[0];
  			var card2 = player.hand.models[1];
  			var card3 = player.hand.models[2];
  			var card4 = player2.hand.models[0];
  			var card5 = player2.hand.models[1];
  			var card6 = player2.hand.models[2];

  			player.swap(player2,[player.hand.models[0],player.hand.models[1],player.hand.models[2]]);
        
        player2.swap(player,[player2.hand.models[0],player2.hand.models[1],player2.hand.models[2]]);

        expect(card1.get('suit')).toEqual(player2.hand.models[10].get('suit'));
        expect(card1.get('rank')).toEqual(player2.hand.models[10].get('rank'));
        expect(card2.get('suit')).toEqual(player2.hand.models[11].get('suit'));
        expect(card2.get('rank')).toEqual(player2.hand.models[11].get('rank'));
        expect(card3.get('suit')).toEqual(player2.hand.models[12].get('suit'));
        expect(card3.get('rank')).toEqual(player2.hand.models[12].get('rank'));
        expect(card4.get('suit')).toEqual(player.hand.models[10].get('suit'));
        expect(card4.get('rank')).toEqual(player.hand.models[10].get('rank'));
        expect(card5.get('suit')).toEqual(player.hand.models[11].get('suit'));
        expect(card5.get('rank')).toEqual(player.hand.models[11].get('rank'));
        expect(card6.get('suit')).toEqual(player.hand.models[12].get('suit'));
        expect(card6.get('rank')).toEqual(player.hand.models[12].get('rank'));

  		});

      it("should not allow a player to swap less than or more than three cards with each other", function(){
          var player = new Player("bob")
          ,   player2 = new Player("steve")
          ,   deck = new Deck()
          ,   expectedException = new RangeError("exactly 3 cards must be specified in a swap");
          
          player.hand = new Hand(deck);
          player2.hand = new Hand(deck);
        
          expect(function() { 
            player.swap(player2,[]);
          }).toThrow(expectedException);

          expect(function() { 
            player.swap(player2,[player.hand.models[0]]);
          }).toThrow(expectedException);

          expect(function() { 
            player.swap(player2,[player.hand.models[0],player.hand.models[1]]);
          }).toThrow(expectedException);

          expect(function() { 
            player.swap(player2,[player.hand.models[0],player.hand.models[1],player.hand.models[2],player.hand.models[3]]);
          }).toThrow(expectedException);
      });

      it ("should not allow a player to swap with an object that is not a player", function(){
        var player = new Player("bob")
          ,   deck = new Deck()
          ,   expectedException = new TypeError("type exception: check parameter type is player");
          
          player.hand = new Hand(deck);
        
          expect(function() { 
            player.swap([],[player.hand.models[0],player.hand.models[1],player.hand.models[2]]);
          }).toThrow(expectedException);
      });

  	})
  }
)

