import React, { Component } from 'react';
import VerticalMenu from './menu/vertical-menu';
import './App.sass';

class App extends Component {
  render() {
    return (
      <div className="app">
        <VerticalMenu />
      </div>
    );
  }
}

export default App;