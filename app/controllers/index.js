import Ember from 'ember';

export default Ember.Controller.extend({


  emailAddress: '',

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid'),

  actions: {

    saveReg() {
     const email = this.get('emailAddress');

     const newInvitation = this.store.createRecord('invitation', { email: email });
     this.set('responseMessage', `Estamos haciendo cooperativistApp a ${this.get('emailAddress')}`);

     newInvitation.save().then(() => {
        this.set('responseMessage', `Fenómeno, ${this.get('emailAddress')} ya es cooperativistApp`);
        this.set('emailAddress', '');
      });

    }
  }

});
