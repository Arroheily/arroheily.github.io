import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import RouterList from '../router/index';

export default class Content extends Component {
  render() {
    return (
      <Router>
        <div>
          <br />
          <Link to="/two">photoPage</Link>
          <br />
          <Link to="/Lists">一个列表</Link>
          <br />
          <RouterList />
        </div>
      </Router>
    );
  }
}
