import React from 'react';
import { Image, Menu } from 'semantic-ui-react';
import './HeaderNav.scss';
import logo from '../../assets/images/mewtubelogo.jpg';

export class HeaderNav extends React.Component {
  render() {
    return (
      <Menu borderless className="top-menu" fixed="top">
        <Menu.Item header className="logo">
          <Image src={logo} size="tiny" />
        </Menu.Item>
        <Menu.Menu className="nav-container">{/* TODO */}</Menu.Menu>
      </Menu>
    );
  }
}

export default HeaderNav;
