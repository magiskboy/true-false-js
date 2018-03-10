var BootState = {
	create: function(){
		txt = game.add.text(0, 0, 'Loading...', {font: '50px Arial', fill: '#FFFFFF'});
		txt.anchor.setTo(0.5, 0.5);
		txt.x = game.world.centerX;
		txt.y = game.world.centerY;
		game.state.start('MenuState');

		innerWidth = window.innerWidth;
		innerHeight = window.innerHeight;
		SCALE_BUTTON = innerWidth * 0.3 / 180;
		SCALE_ICON = innerWidth * 0.25 / 128;
		SCALE_LOGO = innerWidth * 0.9 / 460;
		SCALE_INFO = innerWidth * 0.9 / 216;

		game.state.start('LoaderState');
	}
}