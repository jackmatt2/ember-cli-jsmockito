'use strict';

module.exports = {
  name: 'ember-cli-jsmockito',
  afterInstall: function() {
	  return this.addBowerPackageToProject('jshamcrest');
  },
  included: function(app) {
	  this._super.included(app);
	  
	  app.import('vendor/jsmockito.js', {
		  type: 'test'
	  });
	  app.import('vendor/jshamcrest.js', {
		  type: 'test'
	  });
  },
  contentFor: function(type, config) {
	  
	  if(type === 'test-body') { 
		  var setupJsMockito = '\
			<script language="javascript">\n\
			  $( document ).ready(function() {\n\
			      JsMockito.Integration.QUnit();\n\
			  });\n\
		    </script>\n\
		  ';
		    
		  return setupJsMockito;
	  }
	  
	  return '';
  }
};
