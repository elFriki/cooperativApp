import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('owner');
  },

  actions: {

    deleteOwner(owner) {
      let confirmation = confirm('Seguro?');

      if (confirmation) {
        owner.destroyRecord();
      }
    },

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
