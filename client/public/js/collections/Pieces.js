/**
 * Collection of black checker pieces
 */
var Pieces = Backbone.Collection.extend({
  initialize: function() {
    var collection = this;
    // Add listeners for when any item in the collection
    // is clicked
   /* this.on('add', function(model) {
      model.on('clicked', function(piece) {
        collection.trigger('clicked', piece);
      });
    });*/
  }
});