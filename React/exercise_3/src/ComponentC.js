import React, { Component } from 'react'
import ComponentD from './ComponentD';
import { MyContext } from './ComponentA';

class ComponentC extends Component {
    static contextType = MyContext;

  render() {
    const { methodInA } = this.context;
    methodInA(); // Accessing method of A from C
    return <ComponentD />;
  }
}

export default ComponentC
