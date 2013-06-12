define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/headerTemplate.html'
], function($, _, Backbone,headerTemplate){
	
var HeaderView = Backbone.View.extend({
    el: $("#header"),

    render: function(){
      var compiledTemplate = _.template( headerTemplate );
      this.$el.html(compiledTemplate);
    }

  });

  return HeaderView;
  
});