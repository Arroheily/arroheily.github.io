import React, { Component } from 'react';
import './position-absoulte.sass';

export default class PositionAbsolute extends Component {
  render() {
    return (
      <div className="position-absolute">
        <h1>absolute</h1>
        <p>生成绝对定位的元素，相对于static定位以外的第一个父元素的定位</p>
        <p>元素的位置通过: 'left' 'right' 'bottom' 'top' 来控制的</p>
        <p>适用于: 永远置于，某一个位置的元素，建议不要使用过多的absolute的元素，这会给你带来很多麻烦哦~</p>
      </div>
    );
  }
}
