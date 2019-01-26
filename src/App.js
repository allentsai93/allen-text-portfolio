import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import InputSection from './components/InputSection';

const MainContainer = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  background-color: #000;
`;

const start = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;


const typing = keyframes`
from { width: 0 }
to { width: 100% }
`;

const blinkCaret = keyframes`
from, to { border-color: transparent }
50% { border-color: orange; }
`;


const Content = styled.section`
  height: 100%;
  flex: 11;
  width: 98%;
  margin: 1%;
  padding: 1%;
  box-sizing: border-box;
  border: 1px solid #38ffd1d6;
  animation: ${start} 2s linear;

  & > p {
    color: white;
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    border-right: .15em solid orange; /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 0 auto; /* Gives that scrolling effect as the typing happens */
    letter-spacing: .15em; /* Adjust as needed */
    animation: 
      ${typing} 3.5s steps(40, end),
      ${blinkCaret} .75s step-end infinite;
    animation-delay: 3s;
  }
`;

class App extends Component {
  render() {
    return (
      <MainContainer>
        <Content>
          <p>Lorem ipsum test test testie my testies</p>
        </Content>
        <InputSection />
      </MainContainer>
    );
  }
}

export default App;
