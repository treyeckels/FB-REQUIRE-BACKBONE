define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/footerTemplate.html'
], function($, _, Backbone,footerTemplate){
	
var FooterView = Backbone.View.extend({
    el: $("#footer"),

    render: function(){
      var compiledTemplate = _.template( footerTemplate );
      this.$el.html(compiledTemplate);
    }

  });

  return FooterView;
  
});