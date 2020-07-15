class TicTacToe {
  constructor() {
    this.fields = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.player1 = [];
    this.player2 = [];
    this.gameTurn = true;
    this.winner = 'Player1';
  }

  player1Fields() {
    return this.player1;
  }

  player2Fields() {
    return this.player2;
  }

  gameWinner() {
    return this.winner;
  }

  playGame(field) {
    if (this.gameTurn && this.fields.includes(field)) this.player1.push(field);
    if (!this.gameTurn && this.fields.includes(field)) this.player2.push(field);

    this.fields = this.fields.filter((num) => num != field);
    this.gameTurn = !this.gameTurn;
  }
}
