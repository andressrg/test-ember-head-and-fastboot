import Ember from 'ember';


const { set, inject } = Ember;


export default Ember.Route.extend({
  headData: inject.service(),


  afterModel() {
    set(this, 'headData.title', 'Demo App');
  }
});
