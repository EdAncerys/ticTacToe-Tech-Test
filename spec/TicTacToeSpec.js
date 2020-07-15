describe('TicTacToe', () => {
  var game;

  beforeEach(() => {
    game = new TicTacToe();
  });

  it('player1 should have no fields claimed before the start of the game', () => {
    expect(game.player1Fields().length).toEqual(0);
  });

  it('player2 should have no fields claimed before the start of the game', () => {
    expect(game.player2Fields().length).toEqual(0);
  });
});
