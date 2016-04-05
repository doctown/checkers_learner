/**
 * A view of a line on the checkers board.
 */
var LineView = Backbone.View.extend({
  tagName: 'div',
  className: 'line',
  initialize: function() {
    var view = this;
  },
  render: function() {
    // return this line of data
    this.$el.children().detach();
      this.$el.html('').append(
        this.collection.map(function(tile) {
        return new PieceView({model: tile}).render();
        })
      );
    return this.$el;
  }
});