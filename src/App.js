import React, { Component } from 'react';
import 'react-typist/dist/Typist.css';
import Home from './containers/Home';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';
import HackerEntry from './containers/HackerEntry';
import styled, { css, keyframes } from 'styled-components';

class App extends Component {
  state = {
    showHome: false,
    text: ['hello','test','bye','yo','click'],
    counter: 0,
    shownText: []
  }

  componentDidMount = () => {
    document.addEventListener("keydown", this.contentHandler);
    document.addEventListener("click", this.contentHandler);
  }

  contentHandler = () => {
    let revealedText = [...this.state.shownText];
    revealedText.push(this.state.text[this.state.counter]);
    this.setState({counter: this.state.counter + 1, shownText: revealedText})
  }

  removeListenersAndShowHome = () => {
    if(this.state.counter === this.state.text.length){
      document.removeEventListener("keydown", this.contentHandler);
      document.removeEventListener("click", this.contentHandler);
      this.setState({showHome: true});
    }
  }


  render() {
    const homeContent = this.state.showHome ? <Home /> : 
    <HackerEntry>
      {this.state.shownText.map((text, i) => {
          if (this.state.text.length === i + 1) {
            return <div key={i} style={{display: 'flex'}}>&gt;<Typist onTypingDone={this.removeListenersAndShowHome} cursor={{hideWhenDone: false}}>{text}</Typist></div>
          } else {
            return <div key={i} style={{display: 'flex'}}>&gt;<Typist cursor={{hideWhenDone: true, hideWhenDoneDelay: 0}}>{text}</Typist></div>
          } 
      })}
    </HackerEntry>;

    return (
      <>
      {homeContent}
      </>
    );
  }
}

export default App;
