/*
 * A checkers piece
 */
var Piece = Backbone.Model.extend({
  initialize: function() {
    // add click listener for each piece
    //this.on('click', function() {
    //  this.trigger('click', this);
    //})
  },
  defaults: {
    type: 'single'
  }
});