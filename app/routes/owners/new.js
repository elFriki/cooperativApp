import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('owner');
  },

  actions: {

    saveOwner(newOwner) {
      newOwner.save().then(() => this.transitionTo('owners'));
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }
});
