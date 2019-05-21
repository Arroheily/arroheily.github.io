import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import RouterList from '../router/index';

export default class Content extends Component {
  render() {
    return (
      <Router>
        <div className="Content">
          <Link to="/" className="Link">home</Link>
          <Link to="/two" className="Link">photoPage</Link>
          <Link to="/rolling" className="Link">滚动特效</Link>
          {/* <br />
          <Link to="/Lists">一个列表</Link> */}
          <RouterList />
        </div>
      </Router>
    );
  }
}
