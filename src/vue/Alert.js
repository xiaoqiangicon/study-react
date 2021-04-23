import Vue from 'vue';

const AlertComponent = Vue.extend({
  template: '<div>{{ message }}</div>',
  data() {
    return {
      message: 'hello, lee'
    }
  }
})

export default AlertComponent;