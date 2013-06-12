define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/authorizeTemplate.html'
], function($, _, Backbone,authorizeTemplate){
	
var authorizeView = Backbone.View.extend({
    el: $("#content"),

    render: function(){
      var compiledTemplate = _.template( authorizeTemplate );
      this.$el.html(authorizeTemplate);
    }

  });

  return authorizeView;
  
});