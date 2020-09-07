import Vue from 'vue';
import SingleApp from './singleApp.vue';

const singleAppConstructor = Vue.extend(SingleApp);

export default class App {
  constructor() {
    this.init();
  }

  init() {
    const self = this;
    this.container = document.createElement('div');
    document.body.append(this.container);
    const inner = document.createElement('div');
    this.container.append(inner);

    this.vm = new singleAppConstructor({
      el: inner,
      propsData: {
        hide() {
          self.hide();
        }
      }
    })
  }

  hide() {
    
  }
}
