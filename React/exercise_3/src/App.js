import React, { Component } from 'react';
import { ComponentA } from './ComponentA';
import ComponentB from './ComponentB';

class App extends Component {
  render() {
    return (
      <ComponentA>
        <ComponentB />
      </ComponentA>
    );
  }
}

export default App;
