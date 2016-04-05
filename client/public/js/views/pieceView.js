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
    click: 'handleClick'
  },
  handleClick: function() {
    // handle a click from the player
    // trigger a click regardless of the type
    this.model.clicked();
  },
  render: function() {
    // create a image of the piece based on the type and the color
    var $html = this.$el;
    if (this.model.get('type') === 'tile_light') {
      this.$el.attr('src', 'images/gray.gif');
      this.$el.attr('alt', 'dark player token');
    } else if (this.model.get('type') === 'tile_dark') {
      this.$el.attr('src', 'images/black.gif');
      this.$el.attr('alt', 'dark player token');
    } else if (this.model.get('color') === 'red') {
      this.$el.attr('src', 'images/redPiece.gif');
      this.$el.attr('alt', 'dark player token');
    } else if (this.model.get('color') === 'red-selected') {
      this.$el.attr('src', 'images/redPieceSelected.gif');
      this.$el.attr('alt', 'dark player token');
    } else if (this.model.get('color') === 'black-selected') {
      this.$el.attr('src', 'images/blackPieceSelected.gif');
      this.$el.attr('alt', 'dark player token');
    } else {
      this.$el.attr('src', 'images/blackPiece.gif');
      this.$el.attr('alt', 'dark player token');
    }
    return $html;
  }
});