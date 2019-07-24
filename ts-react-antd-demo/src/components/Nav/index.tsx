import * as React from 'react';
import {Menu} from "antd";
import {Link} from "react-router-dom";

class Nav extends React.Component {
  render() {
    const MenuItem = Menu.Item;
    return (
      <div className={'nav'}>
        <Menu>
          <MenuItem key={'home'}>
            <Link to={'/'}>首页</Link>
          </MenuItem>
          <MenuItem key={'article'}>
            <Link to={'/article'}>文章</Link>
          </MenuItem>
          <MenuItem key={'classify'}>
            <Link to={'/classify'}>分类</Link>
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

export default Nav;
