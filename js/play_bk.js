var PlayState = {
	preload: function(){
		color_array = new Array('#FF7676', '#FFE96F', '#87FF77', '#8AFFF5', '#7680FF', '#FF77E7');
		current_color = 0;
		pointer = 0;
		icon_array = new Array();
		sprite_array = new Array();
		sprite_array_pa = new Array();
		top_array = new Array();
		bottom_arr = new Array();


		isNext = true;
		isLost = false;

		time = 3000;

		// Load assets
		game.load.image('time_line', 'assets/images/time_line.png'); 
		game.load.image('homeBtn', 'assets/images/home.png');
		game.load.image('image1', 'assets/data/1.png');

		// Init Variable
		for(i = 1; i <= 4; i++){
			icon_array.push('icon' + i);
			game.load.image('icon' + i, 'assets/data/' + i + '.png');
		}

		
	},

	create: function(){
		game.stage.backgroundColor = color_array[current_color];
		btnHome = game.add.button(0, 0, 'homeBtn', function(){game.state.start('MenuState')}, this, 2, 1, 0);
		btnHome.anchor.setTo(0.5, 0.5);
		btnHome.scale.setTo(0.4);
		btnHome.x = 50;
		btnHome.y = 150;

		timeLine = game.add.sprite(0, 0, 'time_line');
		timeLine.scale.setTo(game.world.width / 333 * (time / 3000), 0.4);

		for(i = 1; i <= 4; i++){
			tmp = game.add.sprite(-1000, -1000, 'icon'+i);
			tmp.anchor.setTo(0.5, 0.5);
			tmp.scale.setTo(1.2, 1.2);
			sprite_array.push(tmp);
			tmp = game.add.sprite(-1000, -1000, 'icon'+i);
			tmp.anchor.setTo(0.5, 0.5);
			tmp.scale.setTo(1.2, 1.2);
			sprite_array_pa.push(tmp);
		}
	},

	update: function(){
		if(isNext){
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
				tmp = sprite_array[i];
				top_array.push(tmp);
				tmp = sprite_array_pa[i];
				bottom_array.push(tmp);
			}

			for(i = 0; i < 6; i++){
				tmp = bottom_array[i % 3];
				id = Math.round(Math.random() * (2));
				bottom_array[i % 3] = bottom_array[id];
				bottom_array[id] = tmp;
			}

			top_array[0].x = game.world.centerX - 200;
			top_array[0].y = game.world.centerY - 200;

			top_array[1].x = game.world.centerX;
			top_array[1].y = game.world.centerY - 200;

			top_array[2].x = game.world.centerX + 200;
			top_array[2].y = game.world.centerY - 200;

			bottom_array[0].x = game.world.centerX - 200;
			bottom_array[0].y = game.world.centerY + 100;

			bottom_array[1].x = game.world.centerX;
			bottom_array[1].y = game.world.centerY + 100;

			bottom_array[2].x = game.world.centerX + 200;
			bottom_array[2].y = game.world.centerY + 100;

			pointer = 0;

			isNext = false;
		}
	}
}