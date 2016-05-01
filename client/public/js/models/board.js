/*
 * An 8x8 checkers board.
 */
var Board = Backbone.Model.extend({
  initialize: function() {
    var model = this;
    // this.setupBoard();
    /*
     * Create all the pieces on the board
     */
    // Create a collection of pieces based on initial location on the board
    // Create a collection of pieces
    var tilePicker = 0;
    for (var line = 0; line < this.get('boardDimension'); line++) {
      var row = new Pieces();
      tilePicker = (line % 2 === 0) ? 0 : 1;

      for (var i = 0; i < this.get('boardDimension'); i++) {
        if (line < 3 && tilePicker % 2 === 0) {
          row.add(new Piece({color: 'red', curPos: {row: line, col: i}}));
        } else if ((line >= this.get('boardDimension') - 3) && tilePicker % 2 == 0) {
          row.add(new Piece({color: 'black', curPos: {row: line, col: i}}));
        } else if (tilePicker % 2 === 0) {
            row.add(new Piece({type: 'tile_light', curPos: {row: line, col: i}}));
        } else {
          row.add(new Piece({type: 'tile_dark', curPos: {row: line, col: i}}));
        }
        tilePicker++;
      }

      // add a collection to each row
      this.get('rows').push(row);
      row.on('clicked', function(piece) {
        model.trigger('clicked', piece);
      })
    }
  },
  defaults: {
    boardDimension: 8,
    redPieces: new RedPieces({model: Piece}),
    blackPieces: new BlackPieces({model: Piece}),
    rows: []
  },
  move: function(currentPosition, newPosition) {
    var color = currentPosition.get('color');
    // check to see if move is valid
    // if valid move piece to new location
    var xPos = currentPosition.get('curPos').row + newPosition.get('curPos').row;
    var yPos = currentPosition.get('curPos').col + newPosition.get('curPos').col;
    if (xPos % 2 === 0 && yPos % 2 === 0) {
      xPos /= 2;
      yPos /= 2;
      var conflictPiece = this.get('rows')[xPos].at(yPos);
      if (color === 'red-selected' && conflictPiece.get('color') === 'black'
        || color === 'black-selected' && conflictPiece.get('color') === 'red') {
        conflictPiece.set('type', 'tile_light');
        conflictPiece.set('color', null);
        conflictPiece.trigger('change', conflictPiece);
        return 1;
      }
    } else {
      return 0;
    }

  },
  isValid: function(pieceType, currentPosition, newPosition, color) {
    // TODO: check to see if a move is valid
    // TODO: Add test case for valid
    var valid = false;
    // if single
    if (pieceType === 'single') {
      var opponentColor = (color === 'red') ? 'black' : 'red';
      // can only move one space to the right or left
      var rowDifference = newPosition.get('curPos').row - currentPosition.get('curPos').row;
      var colDifference = Math.abs(newPosition.get('curPos').col - currentPosition.get('curPos').col);
      // if attempting to jump, check that tile is an enemy tile
      if (rowDifference === 1 && colDifference === 1) {
        valid = true;
      } else if (rowDifference === 2 && colDifference === 2) { // if an enemy, can only move to space if empty
        var xPos = currentPosition.get('curPos').row + newPosition.get('curPos').row;
        var yPos = currentPosition.get('curPos').col + newPosition.get('curPos').col;
        xPos /= 2;
        yPos /= 2;
        var conflictPiece = this.get('rows')[xPos].at(yPos);
        if (conflictPiece.get('color') === opponentColor) {
          valid = true;
        }
      }
    } else if (pieceType === 'double') {

    } else { // invalid type
      // TODO: Handle non type
    }
    return valid;
  },
  getMoves: function() {
    // TODO: provide the possible moves from this postion
    // check to see what moves are available

    // return an array of valid moves
  },
  getRow: function(rowIndex) { // returns the row in the board based on the index
    return this.get('rows')[rowIndex];
  },
  /*
   * Reset the board by placing the original pieces in the right location.
   */
  reset: function() {

  }
});