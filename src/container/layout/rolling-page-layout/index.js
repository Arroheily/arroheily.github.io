import React, { Component } from 'react';
import './_index.scss';

export default class RollingPageLayout  extends Component {
  componentDidMount() {
    document.addEventListener('scroll', this.rollingEvent);
  }

  rollingEvent = () => {

    const element = document.querySelector('.rolling-page__tab__item--one');
    const elementTwo = document.querySelector('.rolling-page__tab__item--two');
    const elementThree = document.querySelector('.rolling-page__tab__item--three');
    const areaElement = document.querySelector('.rolling-page__area__item--one');
    const a = document.querySelector('.rolling-page__area__item--one').getBoundingClientRect().top;
    if( a <= 0 && a > -82){
      const opacityVal = (areaElement.offsetHeight + a)/100;
      const opacityValTwo = 1 - opacityVal;
      element.style.backgroundColor =  "rgba(56, 178, 166,"+opacityVal+")";
      elementTwo.style.backgroundColor =  "rgba(56, 178, 166,"+opacityValTwo+")";
    } else {
    element.style.backgroundColor =  "rgba(56, 178, 166, 1)";
    elementTwo.style.backgroundColor =  "rgba(56, 178, 166, 0)";
    elementThree.style.backgroundColor =  "rgba(56, 178, 166, 0)";
    }
  }

  render() {
    return (
      <div className="rolling-page">
        <div className="rolling-page__templete">
          <ul className="rolling-page__tab">
            <li className="rolling-page__tab__item rolling-page__tab__item--one">
              <span className="rolling-page__tab__item__content">一区</span>
            </li>
            <li className="rolling-page__tab__item rolling-page__tab__item--two">
              <span className="rolling-page__tab__item__content">二区</span>
            </li>
            <li className="rolling-page__tab__item rolling-page__tab__item--three">
              <span className="rolling-page__tab__item__content">三区</span>
            </li>
          </ul>
          <div className="rolling-page__area">
            <div className="rolling-page__area__item rolling-page__area__item--one">此处是一区范围</div>
            <div className="rolling-page__area__item rolling-page__area__item--two">此处是二区范围</div>
            <div className="rolling-page__area__item rolling-page__area__item--three">此处是三区范围</div>
          </div>
        </div>
      </div>
    );
  }
}
