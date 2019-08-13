import React, { Component } from 'react';
import LeftMenu from '../leftMenu/leftMenu';
import { BrowserRouter, Route } from "react-router-dom";
import Index from '../../pages/index/index';
import Introduction from '../../pages/introduction/index';
import './body.css';

class Body extends React.Component {
  render () {
    return (
      <div className="notes-body">
        <LeftMenu></LeftMenu>
        <BrowserRouter>
          <Route path="/" exact component={Index}></Route>
          <Route path="/Introduction" exact component={Introduction}></Route>
        </BrowserRouter>
      </div>
    )
  }
}

export default Body