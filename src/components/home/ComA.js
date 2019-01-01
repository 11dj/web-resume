import React, { Component } from 'react';
import './App.css';

export default class ComponentA extends Component {
  constructor (props) {
    super(props)
    this.state = {
      response: '',
    }
  }

  render() {
    return (
      <div>
        Component A
      </div> 
    );
  }
}
