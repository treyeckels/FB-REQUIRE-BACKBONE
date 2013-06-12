// Filename: router.js
define([
	'jquery',
	'underscore',
	'backbone',
	'views/HeaderView',
	'views/LoginView',
	'views/AuthorizeView',
	'views/SearchView',
	'views/FooterView'		
],  function($,_,Backbone,HeaderView,LoginView,AuthorizeView,SearchView,FooterView) {
	
	 var AppRouter = Backbone.Router.extend({
	    routes: {
	 		'fb-test/login' : 'doLogin',
	 		'fb-test/authorize' : 'doAuthorize',
	 		'fb-test/search' : 'doSearch'
	    }
	 });
	
	var app_router = new AppRouter;
	
	var init = function(){
		
		var headerView = new HeaderView();
		headerView.render();
		
		app_router.on('route:doLogin', function(){
        	var loginView = new LoginView();
        	loginView.render();
        });
        
        app_router.on('route:doAuthorize', function(){
        	var authorizeView = new AuthorizeView();
        	authorizeView.render();
        });
        
        app_router.on('route:doSearch', function(){
        	var searchView = new SearchView();
        	searchView.render();
        });
		
		
		var footerView = new FooterView();
		footerView.render();
		Backbone.history.start({  pushState: "pushState" in window.history });
	};
	
  return { 
    init: init,
    app_router : app_router
  };
});