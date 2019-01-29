import React, { Component } from 'react';
import 'react-typist/dist/Typist.css';
import Home from './containers/Home';
import HackerEntry from './containers/HackerEntry';
import styled, { css, keyframes } from 'styled-components';

class App extends Component {
  state = {
    showHome: false
  }

  entryHandler = () => {

  }

  render() {
    const homeContent = this.state.showHome ? <Home /> : <HackerEntry onChangeHandler={this.entryHandler}/>;
    return (
      <>
      {homeContent}
      </>
    );
  }
}

export default App;
