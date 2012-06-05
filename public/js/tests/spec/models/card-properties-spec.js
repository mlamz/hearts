define(['../../../models/card-properties'], 
  function(CardProperties) {
    describe("CardProperties", function() {

		it("should have all four suits", function() {
			expect(CardProperties.suit.clubs).toEqual(0);
			expect(CardProperties.suit.diamonds).toEqual(1);
			expect(CardProperties.suit.spades).toEqual(2);
			expect(CardProperties.suit.hearts).toEqual(3);
		});
      });
  }
)

