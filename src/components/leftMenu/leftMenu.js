import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Index from '../../pages/index/index';
import Introduction from '../../pages/introduction/index';
import { Tree } from 'element-react';
import './leftMenu.css';


class LeftMenu extends React.Component{
  constructor(props) {
    super(props);
  
    this.state = {
      data: [{
        label: '一级 1',
        children: [{
          label: '二级 1-1'
        }]
      }, {
        label: '一级 2',
        children: [{
          label: '二级 2-1'
        }, {
          label: '二级 2-2'
        }]
      }, {
        label: '一级 3',
        children: [{
          label: '二级 3-1'
        }, {
          label: '二级 3-2'
        }]
      }],
      options: {
        children: 'children',
        label: 'label'
      }
    }
  }
  render () {
    const { data, options } = this.state
    return (
      <div className = "left-menu" >
        <Tree
          ref={e=> this.tree = e}
          highlightCurrent = {true}
          data={data}
          options={options}
          accordion={true}
          onNodeClicked={node=>console.log(node)}
        />
      </div> 
    )
  }
}

export default LeftMenu