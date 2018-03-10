var WinState = {
	create: function(){
		game.stage.backgroundColor = '#7AFF9C';
		homeBtn = game.add.button(0, 0, 'homeBtn', function(){game.state.start('MenuState');}, 0, 1, 0);
		homeBtn.anchor.setTo(0.5, 0.5);
		homeBtn.scale.setTo(SCALE_BUTTON, SCALE_BUTTON);
		homeBtn.x = game.world.centerX;
		homeBtn.y = innerHeight * 0.5;

		replayBtn = game.add.button(0, 0, 'replayBtn', function(){game.state.start('PlayState');}, 0, 1, 0);
		replayBtn.scale.setTo(SCALE_BUTTON, SCALE_BUTTON);
		replayBtn.anchor.setTo(0.5, 0.5);
		replayBtn.x = game.world.centerX;
		replayBtn.y = innerHeight * 0.8;

		textSprite = game.add.text(0, 0, "Score: " + score, {font: '75px Finger Paint', fill: '#FF0000'});
		textSprite.anchor.setTo(0.5, 0.5);
		ratio = innerWidth * 0.7 / textSprite.width;
		textSprite.width = innerWidth * 0.7;
		textSprite.height = textSprite.height * ratio;
		textSprite.x = game.world.centerX;
		textSprite.y = innerHeight * 0.2;
	}
}