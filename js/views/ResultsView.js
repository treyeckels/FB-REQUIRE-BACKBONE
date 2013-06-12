// Filename: views/ResultsView.js
define([
  'jquery',
  'underscore',
  'backbone',
  'models/ResultsModel',
  'text!templates/resultsTemplate.html',
  'text!templates/itemTemplate.html',
], function($, _, Backbone,ResultsModel,resultsTemplate,itemTemplate){
	
var resultsView = Backbone.View.extend({
    el: $("#content"),
    
    TOSHOW : 5,
    
    render: function(){
      var data = this.model.attributes.fql_result_set,
      	  compiledTemplate = _.template( resultsTemplate ),
      	  val = this.getVal(),
      	  semantics = { title : val, toShow : this.TOSHOW };
      semantics.total = (typeof data != undefined && data != null) ? data.length : 0;
      this.$el.find('#results').empty().append( compiledTemplate( semantics ));
      try{
      	if(data.length > 0){
	      	this.renderItems(data);
	      } 
	   } catch(Err){
	   	
	   }
    },
    
    getVal : function(){
    	return $('#interest').val();
    },
    
    initialize: function() {
       var val = this.getVal();
       this.model = new ResultsModel();
       this.listenTo(this.model, 'change', this.render);
       this.listenTo(this.model, 'destroy', this.render);
       this.model.fetch(val);
  	},
  	
  	renderItems : function(data){
  		var compiledTemplate = _.template( itemTemplate ),
  			self = this,
  			iterator = 1;
  		$.each(data, function(k,v){
  			if(iterator > self.TOSHOW){ return false; }
  			self.$el.find('#results').append( compiledTemplate(v) );
  			iterator++;
  		});
  		$('.searchItem').wrapAll('<ul id="searchList" />');
  	}

  });

  return resultsView;
  
});