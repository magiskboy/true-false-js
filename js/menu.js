var MenuState = {
	create: function(){
		game.stage.backgroundColor = '#54FFE1';
		Logo = game.add.sprite(0, 0, 'logo');
		Logo.scale.setTo(SCALE_LOGO, SCALE_LOGO);
		Logo.anchor.setTo(0.5, 0.5);
		Logo.x = game.world.centerX;
		Logo.y = innerHeight * 0.2;

		btnPlay = game.add.button(0, 0, 'playBtn', function(){game.state.start('PlayState')}, this, 2, 1, 0);
		btnPlay.scale.setTo(SCALE_BUTTON, SCALE_BUTTON);
		btnPlay.anchor.setTo(0.5, 0.5);
		btnPlay.x = game.world.centerX;
		btnPlay.y = innerHeight * 0.5;

		btnInfo = game.add.button(0, 0, 'infoBtn', function(){game.state.start('InfoState')}, this, 2, 1, 0);
		btnInfo.scale.setTo(SCALE_BUTTON, SCALE_BUTTON);
		btnInfo.anchor.setTo(0.5, 0.5);
		btnInfo.x = game.world.centerX;
		btnInfo.y = innerHeight * 0.8;

	}
}