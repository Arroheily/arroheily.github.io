import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.scss';
import Content from './container/content/index';

class App extends Component {
  render() {
    return (
      <div className="app">
        <span className="app__content"><Content/></span>
        <div className="app__bottom">bottom</div>
      </div>
    );
  }
}

export default App;
