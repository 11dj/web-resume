import React, { Component } from 'react';
import './bit.css';
import {
  Container,
  Icon,
  List
} from "nes-react";

export default class BitComponent extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="bit-container">
        <div className="bit-header">
          K I T T I S T
        </div>
        <div className='bit-section'>
          <Container title="About me">
          {this.props.data.bio}
          </Container>
        </div>
        <div className='bit-section'>
          <Container title="Skills">
            <List solid>
              <li className='bit-list' id='ff'>Javascript (ReactJS, NodeJS, Polymer, VueJS)</li>
              <li className='bit-list'>React Native</li>
              <li className='bit-list'>Python</li>
              <li className='bit-list'>Java</li>
              <li className='bit-list'>C++</li>
              <li className='bit-list'>VB.net</li>
              <li className='bit-list'>Firebase</li>
              <li className='bit-list'>Flutter</li>
              <li className='bit-list'>WebAssembly (Novice)</li>
            </List>
          </Container>
        </div>
        <div className='bit-section'>
          <Container title="Projects">
            Under construction
          </Container>
        </div>
        <footer className='footer'>
          <div>
            Feel free to contact me at
          </div>
          <a href="mailto:kittisq@gmail.com" className='bit-footer-icon'>
            <Icon icon="gmail"/>
          </a>
          <a href="https://fb.com/kittis" className='bit-footer-icon'>
            <Icon icon="facebook"/>
          </a>
          <a href="https://github.com/kittist" className='bit-footer-icon'>
            <Icon icon="github"/>
          </a>
          <a href="https://www.linkedin.com/in/kittis/" className='bit-footer-icon'>
            <Icon icon="linkedin"/>
          </a>
          <a href="https://fb.com/kittis" className='bit-footer-icon'>
            <Icon icon="instagram"/>
          </a>
        </footer>
      </div>
    );
  }
}

