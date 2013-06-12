// Filename: models/ResultsModel.js
define([
  'underscore',
  'backbone'
], function(_, Backbone) {

  var ResultsModel = Backbone.Model.extend({
	ERR_MSSG : '<p class="text-error">Something has gone terribly wrong. Please try again later.</p>',
	capitaliseFirstLetter : function(string){
    	return string.charAt(0).toUpperCase() + string.slice(1);
   	},
	fetch : function(val){
		val = this.capitaliseFirstLetter(val);
    	var self = this;
    	if(typeof FB !== undefined){
	    	try{
		    	FB.api('/fql', {q:{"allfriends":"SELECT uid2 FROM friend WHERE uid1=me()", "interests":"SELECT name, pic, profile_url, interests, activities FROM user WHERE (strpos(interests,'" + val + "') >=0 OR strpos(activities,'" + val + "') >=0) AND uid IN (SELECT uid2 FROM #allfriends) "}}, function(response){	
		    	    self.set(response.data[1]);
		    	    if(response.data[1].fql_result_set.length == 0){
		    	    	self.destroy();
		    	    }
		    	});
	    	} catch(Err){
	    		var errorDiv = $('#error');
	    		errorDiv.html(this.ERR_MSSG);
	    	}
    	} else {
    		setTimeout(self.fetch,3000)
    	}
    }
  });

   return ResultsModel;

});