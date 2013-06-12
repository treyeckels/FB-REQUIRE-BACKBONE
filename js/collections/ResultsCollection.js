// Filename: collections/ResultsCollection
define([
  'underscore',
  'backbone',
  'models/ResultsModel'
], function(_, Backbone, ResultsModel){
  var ResultCollection = Backbone.Collection.extend({
    model: ResultsModel,
    fetch : function(){
    	var query = encodeURI('SELECT uid2 FROM friend WHERE uid1=me()');
    	var self = this;
    	if(typeof FB !== undefined){
	    	FB.api('/fql?q={' + query + '}', function(response){
	    		window.alert(response);
	    	});
    	} else {
    		setTimeout(self.fetch,3000)
    	}
    } 
  });

  return ResultCollection;
});