var LoaderState = {
	preload: function(){
		game.load.image('homeBtn', 'assets/images/home.png')
		game.load.image('infoBtn', 'assets/images/info.png');
		game.load.image('playBtn', 'assets/images/play.png');
		game.load.image('logo', 'assets/images/logo.png');
		game.load.image('time_line', 'assets/images/time_line.png'); 
		game.load.image('replayBtn', 'assets/images/replay.png');
		game.load.image('smile', 'assets/images/smile.png');
		game.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');


		// Load Data
		for(i = 1; i <= 13; i++)
			game.load.image('icon' + i, 'assets/data/' + i + '.png');

	},

	create: function(){
		game.state.start('MenuState');
	}
}