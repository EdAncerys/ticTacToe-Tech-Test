describe('TicTacToe', () => {
  var game;

  beforeEach(() => {
    game = new TicTacToe();
  });

  describe('Before The Game', () => {
    it('player1 should have no fields claimed before the start of the game', () => {
      expect(game.player1Fields().length).toEqual(0);
    });

    it('player2 should have no fields claimed before the start of the game', () => {
      expect(game.player2Fields().length).toEqual(0);
    });
  });

  describe('Game On', () => {
    it('player1 should always start first and have field #1 claimed after the move', () => {
      game.playGame(1);
      expect(game.player1Fields().length).toEqual(1);
      expect(game.player1Fields()).toEqual([1]);
    });

    it('player2 should able to claim field #2 after player1 move', () => {
      game.playGame(1);
      game.playGame(2);
      expect(game.player2Fields().length).toEqual(1);
      expect(game.player2Fields()).toEqual([2]);
    });

    it('player1 should able to claim field #3 after player2 move', () => {
      game.playGame(1);
      game.playGame(2);
      game.playGame(3);
      expect(game.player1Fields().length).toEqual(2);
      expect(game.player1Fields()).toEqual([1, 3]);
    });

    it('player2 should not be able to claim same field if its been taken', () => {
      game.playGame(1);
      game.playGame(1);
      expect(game.player2Fields().length).toEqual(0);
      expect(game.player2Fields()).toEqual([]);
    });

    it('player1 should not be able to claim same field if its been taken', () => {
      game.playGame(1);
      game.playGame(2);
      game.playGame(2);
      expect(game.player1Fields().length).toEqual(1);
      expect(game.player1Fields()).toEqual([1]);
    });
  });

  describe('Winner Games', () => {
    it('player1 wins if field 1,2,3 claimed', () => {
      game.playGame(1);
      game.playGame(4);
      game.playGame(2);
      game.playGame(5);
      game.playGame(3);
      expect(game.gameWinner()).toEqual('Player1');
    });

    it('player2 wins if field 3,4,5 claimed', () => {
      game.playGame(4);
      game.playGame(1);
      game.playGame(5);
      game.playGame(2);
      game.playGame(9);
      game.playGame(3);
      expect(game.gameWinner()).toEqual('Player2');
    });

    it('player1 wins if field 4,5,6 claimed', () => {
      game.playGame(4);
      game.playGame(1);
      game.playGame(5);
      game.playGame(2);
      game.playGame(6);
      expect(game.gameWinner()).toEqual('Player1');
    });

    it('player1 wins if field 7,8,9 claimed', () => {
      game.playGame(7);
      game.playGame(4);
      game.playGame(8);
      game.playGame(5);
      game.playGame(9);
      expect(game.gameWinner()).toEqual('Player1');
    });

    it('player1 wins if field 1,5,9 claimed', () => {
      game.playGame(1);
      game.playGame(4);
      game.playGame(5);
      game.playGame(2);
      game.playGame(9);
      expect(game.gameWinner()).toEqual('Player1');
    });

    it('player2 wins if field 2,5,8 claimed', () => {
      game.playGame(4);
      game.playGame(2);
      game.playGame(3);
      game.playGame(5);
      game.playGame(6);
      game.playGame(8);
      expect(game.gameWinner()).toEqual('Player2');
    });
  });
});
