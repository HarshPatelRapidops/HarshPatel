import React, { Component,  createContext} from 'react'

const MyContext = createContext();

class ComponentA extends Component {
    state = {
        value: 'Hello from A',
      };
    
      methodInA = () => {
        console.log('Method called in A');
      };

  render() {
    return (
      <MyContext.Provider value={{ methodInA: this.methodInA }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

export{ ComponentA, MyContext }
