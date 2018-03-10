WebFontConfig = {
	active: function() { game.time.events.add(Phaser.Timer.SECOND, createText, this); },

	google: {
		families: ['Finger Paint']
	}

}