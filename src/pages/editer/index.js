import React, { Component } from 'react';
import ReactQuill from 'react-quill'; // ES6

class MyComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    } 
    
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value) {
    this.setState({
      text: value
    })
  }

  render() {
    return ( 
      <ReactQuill value = {
        this.state.text
      }
      onChange = {
        this.handleChange
      }/>
    )
  }
}

export default MyComponent