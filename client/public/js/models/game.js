/*
 * A game of checkers
 */
var Game = Backbone.Model.extend({
  initialize: {
    score: 0,
    board: null,
    status: 'Not Started',
    turn: 'black',
    capturedBlackPieces: 0,
    capturedRedPieces: 0
  },
  startGame: function() {
    // Create the board

  },
  endGame: function() {
    // Remove the board
    // Reset the score
  },
  endTurn: function() {
    // if turn is black
      // make it red
    // else
      // make it black
  },
  capturedPieces: function() {
    // return the number of captured pieces
  },
  move: function() {
    // if this piece is the same on your turn
    // and the move is valid move
  }

});
