// 高阶组件就是一个函数，传给他一个组件，它返回一个新的组件。

import React, { Component } from 'react';

const newComponent = higherOrderComponent(oldComponent);

export default (wrappedComponent, name) => {
  class NewComponent extends Component {
    constructor () {
      super();
      this.state = { data: null }
    }

    componentWillMount() {
      let data = localStorage.getItem(name);
      this.setState({ data });
    }

    render () {
      return <wrappedComponent data={this.state.data} />
    }
  }
  return NewComponent
}