// Filename: app.js
define([
  'jquery',
  'router'
], function($,Router){
  
  var funcs = {
  	MESSAGE : "Enter a better search string please",
  	init : function(){
  		this.registerHandlers();
  	},
  	
  	registerHandlers : function(){
  		var proxy = $.proxy( this.login, this );
  		
  		$('#content').on('click', '#authorize' , function(e){
  			e.preventDefault();
  			proxy();
  		});
  		
  		
  	},
  	login : function(){
  		
  		FB.login(function(response) {
		   if (response.authResponse) {
		     FB.api('/me', function(response) {
		       var app_router = Router.app_router;
	   		   app_router.navigate('fb-test/search', { trigger: true });
		     });
		   } else {
		     window.alert('Hey! You did not authorize the app! Please try again!');
		   }
 		}, {scope: 'friends_interests,friends_activities,user_interests,user_activities'});
  	}
  }
  
  
  var init = function(){
    Router.init();
    funcs.init();
  };
  
  return { 
    init: init
  };
});