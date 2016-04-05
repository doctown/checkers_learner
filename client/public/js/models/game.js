/*
 * A game of checkers
 */
var Game = Backbone.Model.extend({

  initialize: function() {
    // call startGame
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
    // Remove the board
    // Reset the score
  },
  endTurn: function() {
    // if turn is black
    if (this.get('turn') === 'red') {
      // make it red
      this.set('turn', 'black');
    } else {
      // else
      this.set('turn', 'red');
      // make it black
    }
  },
  capturedPieces: function() {
    // return the number of captured pieces
  },
  move: function() {
    // if this piece is the same on your turn
    // and the move is valid move
  },
  handleClick: function(piece, parent) {
    // the piece click is my turn
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
