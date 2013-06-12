// Filename: main.js

require.config({
  paths: {
    jquery: 'libs/jquery-1.9.0.min',
    underscore: 'libs/underscore-min',
    backbone: 'libs/backbone',
    templates: '../templates',
    facebook: '//connect.facebook.net/en_US/all'
  },
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ["underscore", "jquery"],
      exports: "Backbone"
    },
    facebook : { 
    	exports: 'FB' 
    }
  }
});

require([
  'app',
  'libs/fb'
], function(App){
  App.init();
});