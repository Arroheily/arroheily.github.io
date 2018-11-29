import React, { Component } from 'react';
import VerticalMenu from '../../menu/vertical-menu';
import MenuRouter from '../../menu/router/router';
import { BrowserRouter as Router } from "react-router-dom";

export default class Note extends Component {
    render() {
      return (
        <div className="note">
          <Router>
            <div className="note__menu">
              <VerticalMenu />
              <MenuRouter />
            </div>
          </Router>
        </div>
      );
    }
  }