import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('library');
  },

  actions: {

    deleteLibrary(library) {
      let confirmation = confirm('Seguro?');

      if (confirmation) {
        library.destroyRecord();
      }
    }
  }

});
