// Filename: views/SearchView.js
define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/searchTemplate.html',
  'views/ResultsView'
], function($, _, Backbone,searchTemplate,ResultsView){
	
var searchView = Backbone.View.extend({
    el: $("#content"),
    
    ERR_MSSG : '<p class="text-error">Please enter a value</p>',
    
    events: {
	    "click #submit": "submit",
  	},
    
    render: function(){
      var compiledTemplate = _.template( searchTemplate );
      this.$el.html(compiledTemplate);
    },
    
    submit : function(e){
    	e.preventDefault();
    	var errorDiv = $('#error');
    	var val = $('#interest').val();
    	if(!!val){
	    	errorDiv.empty();
	    	//memoize
	    	if(!!!arguments.callee.resultsView){
	    		var resultsView = new ResultsView();
	    		arguments.callee.resultsView = resultsView;
	    	} else {
	        	arguments.callee.resultsView.model.fetch( val );
	       }
       } else {
       	errorDiv.html(this.ERR_MSSG);	
       }
    }

  });

  return searchView;
  
});