/*
 * A checkers piece
 */
var Piece = Backbone.Model.extend({
  initialize: function() {
    state: 'single'
  },
  move: function(newPosition) {
    if (Board.isValidPosition(newPosition)) {
      this.set(this.get('cur_pos'), newPosition);
    } else {
      return 'Invalid position';
    }
  }
});