/**
 * A view of a line on the checkers board.
 */
var lineView = Backbone.View.extend({
  tagName: 'div',
  className: 'line',
  initialize: function() {
    var view = this;
  },
  render: function() {
    // return this line of data
    return {
      this.$el.html('<div></div>').append(
        this.collection.map(function(tile) {
          return new pieceView({model: tile}).render();
        })
      );
    }
  }
});