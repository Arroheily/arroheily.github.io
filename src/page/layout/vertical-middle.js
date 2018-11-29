import React, { Component } from 'react';
import './vertical-middle.sass';

export default class VerticalMiddle extends Component {
  render() {
    return (
      <div className="vertical-middle">
        <div className="vertical-middle-demo">
          <h1>middle</h1>
          <div className="vertical-middle-block">
            <h3>文字在div中居中</h3>
            <ul>
              <li>height: 128px</li>
              <li>line-height: 128px</li>
              <li>text-align: center</li>
            </ul>
            <div className="demo1-container demo1-element">
              我是一个需要居中的文字哦~
            </div>
          </div>
          <div className="vertical-middle-block">
            <h3>div在div中居中</h3>
            <div className="demo1-container demo1-element">
              <div className="middle-div"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
