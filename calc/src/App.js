import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import Calculator from './components/Calculator/Calculator';

class App extends Component {
  render() {
    return (
      <div>
        <Layout />
        <Calculator />
      </div>
    );
  }
}

export default App;
