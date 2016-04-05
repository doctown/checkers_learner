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
  },
  clicked: function() {
    var mycolor = this.get('color');
    if (mycolor === 'red') {
      this.set('color', 'red-selected');
    } else if (mycolor === 'black') {
      this.set('color', 'black-selected');
    } else if (mycolor === 'black-selected') {
      this.set('color', 'black');
    } else if (mycolor === 'red-selected') {
      this.set('color', 'red');
    }

    this.trigger('change', this);
    this.trigger('clicked', this)
  }
});