'use strict';

module.exports = {
  name: 'ember-cli-jsmockito',
  afterInstall: function() {
	  return this.addBowerPackageToProject('jshamcrest');
  }
};
