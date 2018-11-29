import React, { Component } from 'react';
import VerticalMenu from './menu/vertical-menu';
import { BrowserRouter as Router } from "react-router-dom";
import MenuRouter from '../src/router/router';
import './App.sass';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div className="app-menu">
            <VerticalMenu />
            <MenuRouter />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;