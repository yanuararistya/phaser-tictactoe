import GameState from 'states/GameState';

class Board extends Phaser.Sprite {

	constructor(game, x, y) {
		super(game, x, y, 'board');

		this.anchor.set(0.5);
		this.inputEnabled = true;

		this.events.onInputDown.add((target, touch) => {

			const tile = {
				width: this.width/3,
				height: this.height/3
			};

			// get touch location, transform to board position
			const position = {
				x: Math.floor((touch.x - this.left) / tile.width),
				y: Math.floor((touch.y - this.top) / tile.height) 
			};

			const gameState = this.game.state.states[this.game.state.current];

			if (gameState.getState(position) === '') {
				gameState.setState(position);

				const textPos = {
				 	x: (position.x-1) * tile.width,
				 	y: (position.y-1) * tile.height
				}				
				const text = this.game.make.text(textPos.x, textPos.y, gameState.getState(position), 
					{fontSize:'60px'});
				text.anchor.set(0.5);
				this.addChild(text);
			}

		}, this);
	}
}

export default Board;