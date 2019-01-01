import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MainContainer from './containers/main'
import BitContainer from './containers/bit'


class App extends Component {

  render() {
    return (
      <Router>
        <div>
          {/* <Route exact path="/" component={MainContainer} /> */}
          <Route exact path="/" component={BitContainer} />
        </div>
      </Router>
    );
  }
}

export default App;
