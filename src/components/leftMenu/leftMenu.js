import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

import './leftMenu.css';

class LeftMenu extends React.Component{
  render () {
    return (
      <div className = "left-menu" >
        <ul>
          <li> <Link to="/about"> About </Link></li>
          <li> <Link to="/inbox"> Inbox </Link></li>
        </ul>
        {this.props.children}
      </div> 
    )
  }
}

export default LeftMenu