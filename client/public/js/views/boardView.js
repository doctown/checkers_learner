/**
 * Creates the view for the checker board
 */
var BoardView = Backbone.View.extend({
  tagName: 'div',
  className: 'board',
  initialize: function() {
    this.render();
  },
  render: function() {
    // create the line views
    // render all the lines
    this.$el.children().detach();
    this.$el.html('').append(
      this.model.get('board').get('rows').map(function(line) {
        return new LineView({collection: line}).render();
      })
    );
    return this.$el;
  }
});