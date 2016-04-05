/**
 * Creates the view for the checker board
 */
var lineView = Backbone.View.extend({
  tagName: 'div',
  className: 'board',
  initialize: function() {
    this.render();
  },
  render: function() {
    // create the line views
    this.$el.children().detach();

    this.$el.html('<div></div>').append(
      this.model.get('board').get('rows').map(function(tile) {
        return new pieceView({model: tile}).render();
      })
    );
  }
});