import React, { Component } from 'react';
import './App.css';

import ComponentA from './ComA'
class MainComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      response: '',
      post: '',
      responseToPost: '',
      keyword: ''
    }
  }


  render() {
    console.log(this.props)
    return (
      <div className="App">
          Hello
          <ComponentA />
      </div>
    );
  }
}

export default MainComponent;
