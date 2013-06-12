define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/loginTemplate.html'
], function($, _, Backbone,loginTemplate){
	
var loginView = Backbone.View.extend({
    el: $("#content"),

    render: function(){
      var compiledTemplate = _.template( loginTemplate );
      this.$el.html(loginTemplate);
    }

  });

  return loginView;
  
});