import React, { Component } from 'react';
import 'react-typist/dist/Typist.css';
import Home from './containers/Home';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';
import HackerEntry from './containers/HackerEntry';
import styled, { css, keyframes } from 'styled-components';

const TypeWithAnswer = styled(Typist)`
  & span { 
    margin: 0;
  }
`;
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

  textResponseHandler = (text) => {
      setTimeout(() => {
        if(text){
        text.current.style.display = 'block';
        }
      }, 300)
  }

  render() {
    const homeContent = this.state.showHome ? <Home /> : 
    <HackerEntry>
      {this.state.shownText.map((text, i) => {
          if (this.state.text.length === i + 1) {
            return <Typist key={i} onTypingDone={this.removeListenersAndShowHome}>{text}</Typist>
          } else {
            let textRef = React.createRef();
            return (
            <div key={i}>
            <TypeWithAnswer showAnswer={this.state.showAnswer} cursor={{hideWhenDone: true, hideWhenDoneDelay: 0}} onTypingDone={() => this.textResponseHandler(textRef)}>{text}</TypeWithAnswer>
            <span style={{display: 'none', margin: '0'}} ref={textRef}>{text} <Typist>{text}</Typist></span>
            </div>
            )
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
