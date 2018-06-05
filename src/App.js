import React, { Component } from 'react';
import './App.css';

import MostBasicWithNoArguments from './components/MostBasicWithNoArguments'

class App extends Component {
  render() {
    return (
      <div className="App" style={{ maxWidth: '700px', margin: 'auto' }}>
        <h1>App</h1>

        <MostBasicWithNoArguments />
      </div>
    );
  }
}

export default App;
