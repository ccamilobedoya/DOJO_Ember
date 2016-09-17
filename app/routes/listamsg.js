import Ember from 'ember';

//let msgs = [];

export default Ember.Route.extend({

	model() {
		//console.log(this.get('store').findAll('msgs'))
    	return this.get('store').findAll('msg');
  	}

});
