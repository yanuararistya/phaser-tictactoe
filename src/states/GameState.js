import Board from 'board';

class GameState extends Phaser.State {

	preload() {
		this.game.stage.backgroundColor = '#ffffff';
		this.game.load.image('board', 'assets/board.png');

		this.state = [
			['','',''],
			['','',''],
			['','','']
		];

		this.turn = 0;
	}

	create() {
		const center = {x: this.game.world.centerX, y: this.game.world.centerY};
		let board = new Board(this.game, center.x, center.y);
		this.game.stage.addChild(board);

		const title = this.game.add.text(center.x, 50, 'Tic Tac Toe', {fontSize: '60px'});
		title.anchor.set(0.5);
	}

	setState(pos) {
		this.state[pos.x][pos.y] = this.getText();
		this.turn++;
	}

	getState(pos) {
		if (pos != null) return this.state[pos.x][pos.y];
		else return this.state;
	}

	getText() {
		return this.turn % 2 == 0 ? 'O' : 'X';
	}
}

export default GameState;
