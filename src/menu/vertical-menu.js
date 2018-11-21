import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import PositionAbsolute from '../page/position-absoulte';
import PositionMore from '../page/position-more';
import './vertical-menu.sass';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class VerticalMenu extends Component {
  handleClick = (e) => {
    console.log('click ', e);
  }

  render() {
    return (
      <Router>
        <div>
        <Menu
          onClick={ this.handleClick }
          style={ { width: 256 } }
          defaultSelectedKeys={ ['1'] }
          defaultOpenKeys={ ['sub1'] }
          mode="inline"
        >
          <SubMenu key="sub1" title={ <span><Icon type="mail" /><span>code problem css</span></span> }>
            <MenuItemGroup key="sub1-group1" title="position属性">
              <Menu.Item key="sub1-group1-item1">
                <Link to='/absolute'>absolute & relative</Link>
              </Menu.Item>
              <Menu.Item key="sub1-group1-item2">
                <Link to='/more'>more</Link>
              </Menu.Item>
            </MenuItemGroup>
          </SubMenu>
        </Menu>
        <div className="app__templete">
          <Route path="/more" component={ PositionMore } />
          <Route path="/absolute" component={ PositionAbsolute } />
        </div>
        </div>
      </Router>
    );
  }
}