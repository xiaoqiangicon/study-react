import '@babel/polyfill';
import './js/es';
import Vue from 'vue';
import App from './App.vue';
import React from 'react';
import ReactDOM from 'react-dom';
import Index from './react/index.jsx';
import { Provider } from 'react-redux';
import store from './redux/store';
import { addToCart, updateCart, deleteFromCart } from './redux/action';

let vm = new Vue({
  el: '#app',
  render: h => h(App),
});


console.log('initital state: ', store.getState());
let unsubscribe = store.subscribe(() => 
  console.log(store.getState())
)
store.dispatch(addToCart('coffee', 1, 250));
store.dispatch(addToCart('flour', 2, 110));
store.dispatch(addToCart('juice', 1, 240));
store.dispatch(updateCart('coffee', 3, 220));
store.dispatch(deleteFromCart('juice'));
unsubscribe();
ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById('root')
);