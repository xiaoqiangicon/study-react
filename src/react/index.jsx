import React from 'react';
import Hook from './hook.jsx';
import Practice from './practice.jsx';

function Index () {
  return (
    <div>
      <p>react组件:</p>
      <Hook />
      <Practice unlikedText={'unlike'} likedText={'like'}/>
    </div>
  )
}

export default Index;