'use strict';

module.exports = {
  name: 'ember-cli-jsmockito',
  afterInstall: function() {
	  return this.addBowerPackageToProject('jshamcrest');
  },
  contentFor: function(type, config) {
	  
	  if(type === 'test-body') {
		  var injectJsMockito = '\
		    <script src="ember-cli-jsmockito/assets/tests/jshamcrest.js"></script>\
		    <script src="ember-cli-jsmockito/assets/tests/jsmockito.js"></script>\
		    <script language="javascript">\
			  $( document ).ready(function() {\
			      JsMockito.Integration.QUnit();\
			  });\
		    </script>\
		  ';
		    
		  return injectJsMockito;
	  }
	  
	  return '';
  }
};
