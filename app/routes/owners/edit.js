// app/routes/owners/edit.js
import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.store.findRecord('owner', params.owner_id);
  },

  actions: {

    saveOwner(newOwner) {
      newOwner.save().then(() => this.transitionTo('owners'));
    },

    willTransition(transition) {

      let model = this.controller.get('model');

      if (model.get('hasDirtyAttributes')) {
        let confirmation = confirm("No has guardado los cambios y a lo mejor deberías cancelar este mensaje y hacerlo. Si aceptas, los pierdes.");

        if (confirmation) {
          model.rollbackAttributes();
        } else {
          transition.abort();
        }
      }
    }
  }
});
