import React, { Component } from 'react';
import { Button } from 'antd';

class LikeButton extends Component {
   
  constructor() {
    super();
    this.state = { 
      isLiked: false,
      count: 0,
    }
  }

  handleClick() {
    this.setState({
      isLiked: !this.state.isLiked
    });
    this.setState(
       {count: this.state.count + 1}
    );
    this.setState((prevState) => {
      return { count: prevState.count + 2 }
    })
  }

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.handleClick.bind(this)}>lee</Button>
        <span>count: {this.state.count}</span>
      </div>
    )
  }
}

export default LikeButton;