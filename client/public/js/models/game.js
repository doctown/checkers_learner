/*
 * A game of checkers
 */
var Game = Backbone.Model.extend({

  initialize: function() {
    this.startGame();
  },
  defaults: {
    score: 0,
    board: null,
    status: 'Not Started',
    turn: 'black',
    capturedBlackPieces: 0,
    capturedRedPieces: 0,
    currentPiece: null
  },
  startGame: function() {
    var model = this;
    // Create the board
    this.set('board', new Board());
    this.get('board').on('clicked', this.handleClick, model);
  },
  endGame: function() {
    // TODO: Remove the board
    this.board.reset();
    // TODO: Reset the score, should high score be recorded or wins
    this.score = 0;
  },
  endTurn: function() {
    if (this.get('turn') === 'red') {
      this.set('turn', 'black');
    } else {
      this.set('turn', 'red');
    }
  },
  capturedPieces: function() {
    // TODO: return the number of captured pieces
  },
  move: function() {
    // if this piece is the same on your turn
    // and the move is valid move
  },
  handleClick: function(piece) {
    // the piece click is my turn
    // TODO: Migrate the move logic to the board
    var currentPiece = this.get('currentPiece');
    if (this.get('turn') === piece.get('color')) {
      if (currentPiece === null) { // if no current piece selected select this on
        this.set('currentPiece', piece);
        piece.toggle();
      } else if (currentPiece === piece) { // if same piece toggle
        piece.toggle();
        this.set('currentPiece', null);
      }
    } else if (piece.get('type') === 'tile_light' && currentPiece !== null) { // if an empty tile is selected, move the current piece
      this.get('board').move(currentPiece, piece);
      piece.set('type', currentPiece.get('type'));
      piece.set('color', currentPiece.get('color'));
      currentPiece.set('type', 'tile_light');
      currentPiece.set('color', null);
      currentPiece.trigger('change', currentPiece);
      piece.trigger('change', piece);
      piece.toggle();
      this.set('currentPiece', null);
      // call end turn
      this.endTurn();
    }

    console.log('You clicked', piece);
  }
});
