/*
 * An 8x8 checkers board.
 */
var Board = Backbone.Model.extend({
  initialize: function() {
    // this.setupBoard();
    /*
     * Create all the pieces on the board
     */
    // Create a collection of pieces
    var tilePicker = 0;
    var redPiecesCounter = 0;
    var blackPiecesCounter = 0;
    for (var line = 0; line < this.get('boardDimension'); line++) {
      var row = new Pieces();
      if (line % 2 === 0) {
        tilePicker = 0;
      } else {
        tilePicker = 1;
      }
      for (var i = 0; i < this.get('boardDimension'); i++) {
        if (tilePicker % 2 === 0) {
          row.add(new Piece({type: 'tile_light'}));
        } else {
          row.add(new Piece({type: 'tile_dark'}));
        }
        tilePicker++;
      }
      // add a collection to each row
      this.get('rows').push(row);
    }
  },
  defaults: {
    boardDimension: 8,
    redPieces: new RedPieces({model: Piece}),
    blackPieces: new BlackPieces({model: Piece}),
    rows: []
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
  },
  getRow: function(rowIndex) { // returns the row in the board based on the index
    return this.get('rows')[rowIndex];
  }
});