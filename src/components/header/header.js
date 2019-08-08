import React, { Component } from 'react';
// import ElementUI from 'element-react';
import 'element-theme-default';

import './header.css';

class Header extends React.Component {
  render () {
    return (
      <div className="header">
        <div className="header-left-column">
          <span className="left-text">前端笔记</span>
        </div>
        <div className="header-center-column"></div>
        <div className="header-right-column">
          <span className="el-icon-search font-search"></span>
          <input className="input-search" type="text" placeholder="Search..."/>
        </div>
      </div>
    )
  }
}

export default Header;
