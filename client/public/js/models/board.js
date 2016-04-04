/*
 * An 8x8 checkers board.
 */
var Board = Backbone.Model.extend({
  initialize: {
    n: 8,
    redPieces: new RedPieces(),
    blackPieces: new BlackPieces,
    board: []
  },
  setupBoard: function() {
    /*
     * Create all the pieces on the board
     */
  },
  move: function(newPosition) {
    // check to see if move is valid
    // if valid move piece to new location
    if (this.isValidPosition(newPosition)) {
      this.set(this.get('cur_pos'), newPosition);
    } else {
      return 'Invalid position';
    }
  },
  isValid: function() {

  },
  getMoves: function() {
    // check to see what moves are available

    // return an array of valid moves
  }
});