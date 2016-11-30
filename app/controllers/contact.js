import Ember from 'ember';

export default Ember.Controller.extend({

  emailToAddress: '',
  message: '',

  isValidEmail: Ember.computed.match('emailToAddress', /^.+@.+\..+$/),
  isMessageEnoughLong: Ember.computed.gte('message.length', 5),

  isDisabled: Ember.computed.not('isValidEmail', 'isMessageEnoughLong'),

  actions: {
    sendMessage: function() {
      var email = this.get('emailToAddress');
      var message = this.get('message');

      alert('Enviando tu mensaje... ');

      var responseMessage = 'A: ' + email + ', Mensaje: ' + message;
      this.set('responseMessage', responseMessage);
      this.set('emailToAddress', '');
      this.set('message', '');
    }
  }

});
