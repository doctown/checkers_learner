/**
 * Provides a view for each individual checkers piece
 */
var PieceView = Backbone.View.extend({
  tagName: 'img',
  className: 'tile',

  initialize: function() {
    var view = this;

    // I add a listener for when there is a change to this tile
    this.model.on('change', function(type) {
      // add the type
      view.render();
    });
  },
  events: {
    click: handleClick
  },
  handleClick: function() {
    // handle a click from the player
    // trigger a click regardless of the type
    this.model.trigger('click');
  },
  render: function() {
    // create a image of the piece based on the type and the color
    $html = null;
    if (this.model.get('type') === 'tile') {
      $html = this.$el.html('<img src="images/gray.gif" alt="dark player token"/>');
    } else if (this.model.get('color') === 'red') {
      $html = this.$el.html('<img src="images/redPiece.gif" alt="dark player token"/>');
    } else {
      $html = this.$el.html('<img src="images/blackPiece.gif" alt="dark player token"/>');
    }
    return $html;
  }
});