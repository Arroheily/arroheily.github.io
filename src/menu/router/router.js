import React, { Component } from 'react';
import { Route } from "react-router-dom";
import PositionAbsolute from '../../page/templete/position-absolute';
// import Home from '../../page/home/index';

export default class MenuRouter extends Component {
    render() {
        return (
            <div className="app-templete">
                {/* <Route path="/home" component={ Home } /> */}
                <Route path="/absolute" component={ PositionAbsolute } />
            </div>
        );
    }
}