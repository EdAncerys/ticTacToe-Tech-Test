class TicTacToe {
  constructor() {
    this.player1 = [];
    this.player2 = [];
    this.gameTurn = true;
  }

  player1Fields() {
    return this.player1;
  }

  player2Fields() {
    return this.player2;
  }

  playGame(field) {
    if (this.gameTurn) this.player1.push(field);
    // else this.player2.push(field);
    // this.gameTurn = !this.gameTurn;
  }
}
