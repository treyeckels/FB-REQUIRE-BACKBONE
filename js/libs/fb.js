// Filename: fb.js

define([
	'facebook',
	'router'
], function(FB, Router){
  var appId = '165766463602036',
      host = window.location.host;
  if(host.indexOf("localhost") != -1){
  	appId = '345559042239960';
  }
  FB.init({
    appId : appId
  });
  FB.getLoginStatus(function(response) {
     if (response.status === 'connected') {
	    var app_router = Router.app_router;
	    app_router.navigate('fb-test/search', { trigger: true });
	  } else if (response.status === 'not_authorized') {
	    var app_router = Router.app_router;
	    app_router.navigate('fb-test/authorize', { trigger: true });
	  } else {
	    var app_router = Router.app_router;
	    app_router.navigate('fb-test/login', { trigger: true });
	  }
  });
});