var PlayState = {
	create: function(){
		// Init Variable
		game.physics.startSystem(Phaser.Physics.ARCADE);
		color_array = new Array('#FF7676', '#FFE96F', '#87FF77', '#8AFFF5', '#7680FF', '#FF77E7');
		sprite_array = new Array();
		sprite_array_pa = new Array();
		top_array = new Array();
		bottom_arr = new Array();

		timeBegin = game.time.totalElapsedSeconds();
		current_color = 2;
		pointer = 0;
		isNext = true;
		isLost = false;
		timeDelta = 3000;
		score = 0;

		// Set Screen
		game.stage.backgroundColor = color_array[current_color];

		btnHome = game.add.button(0, 0, 'homeBtn', function(){game.state.start('MenuState')}, this, 2, 1, 0);
		btnHome.anchor.setTo(0.5, 0.5);
		btnHome.scale.setTo(SCALE_BUTTON * 0.5);
		btnHome.x = innerWidth * 0.1;
		btnHome.y = innerHeight * 0.1;
		
		scoreSprite = game.add.text(0, 0, "Score: 0", {font: '50px Finger Paint', fill: '#FF0000'});
		scoreSprite.anchor.setTo(0.5, 0.5);
		textRatio = innerWidth * 0.7 / scoreSprite.width;
		scoreSprite.width = innerWidth * 0.7;
		scoreSprite.height = scoreSprite.height * textRatio;
		scoreSprite.x = game.world.centerX;
		scoreSprite.y = innerHeight * 0.25;

		timeLine = game.add.sprite(0, 0, 'time_line');
		timeLine.scale.setTo(innerWidth / 333 * (timeDelta / 3000), 0.4);

		for(i = 1; i <= 13; i++){
			tmp = game.add.sprite(-1000, 0, 'icon'+i);
			tmp.anchor.setTo(0.5, 0.5);
			tmp.scale.setTo(SCALE_ICON);
			game.physics.enable(tmp, Phaser.Physics.ARCADE);
			sprite_array.push(tmp);

			tmp = game.add.button(-1000, 0, 'icon'+i, this.clickMe, this, 0, 1, 0);
			tmp.anchor.setTo(0.5, 0.5);
			tmp.scale.setTo(SCALE_ICON);
			sprite_array_pa.push(tmp);
			game.physics.enable(tmp, Phaser.Physics.ARCADE);
		}

	},

	update: function(){
		if(isNext){
			for(i = 0; i < top_array.length; i++){
				top_array[i].x = -500;
				top_array[i].body.velocity.x = 0;
			}

			for(i = 0; i < sprite_array.length; i++){
				tmp = sprite_array[i];
				id = Math.round(Math.random() * (sprite_array.length - 1));
				sprite_array[i] = sprite_array[id];
				sprite_array[id] = tmp;

				tmp = sprite_array_pa[i];
				sprite_array_pa[i] = sprite_array_pa[id];
				sprite_array_pa[id] = tmp;
			}

			top_array = [];
			bottom_array = [];

			for(i = 0; i < 3; i++){
				tmpSprite = sprite_array[i];
				top_array.push(tmpSprite);

				tmpButton = game.add.button(0, 0, tmpSprite.key, this.clickMe, 0, 1, 0);
				tmpButton.anchor.setTo(0.5, 0.5);
				tmpButton.scale.setTo(SCALE_ICON);
				bottom_array.push(tmpButton);
			}

			for(i = 0; i < 6; i++){
				tmp = bottom_array[i % 3];
				id = Math.round(Math.random() * (2));
				bottom_array[i % 3] = bottom_array[id];
				bottom_array[id] = tmp;
			}

			top_array[0].x = game.world.centerX - innerWidth * 0.275;
			top_array[0].y = innerHeight * 0.5;

			top_array[1].x = game.world.centerX;
			top_array[1].y = innerHeight * 0.5;

			top_array[2].x = game.world.centerX + innerWidth * 0.275;
			top_array[2].y = innerHeight * 0.5;

			bottom_array[0].x = game.world.centerX - innerWidth * 0.275;
			bottom_array[0].y = innerHeight * 0.8;

			bottom_array[1].x = game.world.centerX;
			bottom_array[1].y = innerHeight * 0.8;

			bottom_array[2].x = game.world.centerX + innerWidth * 0.275;
			bottom_array[2].y = innerHeight * 0.8;

			pointer = 0;

			timeBegin = game.time.totalElapsedSeconds();

			isNext = false;
		}

		timeLine.scale.setTo(game.world.width / 333 * (timeDelta / 3000), 0.4);
		timeDelta = (game.time.totalElapsedSeconds() - timeBegin) * 1000;
		if(timeDelta > 3000) game.state.start('WinState');

		game.stage.backgroundColor = color_array[score % color_array.length];
	},

	clickMe: function(){
		if(this.key != top_array[pointer].key) 
			game.state.start('WinState');

		// top_array[pointer].x = -500;
		
		if(top_array[pointer].x > -500)
			top_array[pointer].body.velocity.x = -1000;
		else 
			top_array[pointer].body.velocity = 0;

		this.x = -500;

		pointer++;

		if(pointer == 3){
			isNext = true;
			score++;
			scoreSprite.text = "Score: " + score;
		}
	},

	moveOut: function(sprite){
		if(sprite.x > -1000)
			sprite.body.velocity.x = -300;
		else 
			sprite.body.velocity.x = 0;
	}
}