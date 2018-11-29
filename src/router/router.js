import React, { Component } from 'react';
import { Route } from "react-router-dom";
import PositionAbsolute from '../page/position-absoulte';
import PositionMore from '../page/position-more';
import VerticalMiddle from '../page/layout/vertical-middle';

export default class MenuRouter extends Component {
    render() {
        return (
            <div className="app-templete">
                <Route path="/more" component={ PositionMore } />
                <Route path="/vertical-middle" component={ VerticalMiddle } />
                <Route path="/absolute" component={ PositionAbsolute } />
            </div>
        );
    }
}