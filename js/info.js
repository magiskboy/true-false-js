var InfoState = {
	create: function(){
		game.stage.backgroundColor = '#FFABAB';
		bigMom = game.add.sprite(0, 0, 'smile');
		bigMom.anchor.setTo(0.5, 0.5);
		bigMom.scale.setTo(SCALE_INFO, SCALE_INFO);
		bigMom.x = game.world.centerX;
		bigMom.y = game.world.centerY - innerHeight * 0.2;

		homeBtn = game.add.button(0, 0, 'homeBtn', function(){game.state.start('MenuState');}, 0, 1, 0);
		homeBtn.anchor.setTo(0.5, 0.5);
		homeBtn.x = game.world.centerX;
		homeBtn.scale.setTo(SCALE_BUTTON, SCALE_BUTTON);
		homeBtn.y = game.world.centerY + innerHeight * 0.3;
	}
}