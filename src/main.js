import '@babel/polyfill';
import './js/es';
import Vue from 'vue';
import App from './App.vue';
import React from 'react';
import ReactDOM from 'react-dom';

let vm = new Vue({
  el: '#app',
  render: h => h(App),
});

ReactDOM.render(
  <div>hello react!</div>,
  document.getElementById('root')
);