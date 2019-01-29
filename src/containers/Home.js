import React, { Component } from 'react';
import styled, { keyframes,css } from 'styled-components';
import InputSection from '../components/InputSection';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';
import Main from './Main';

const MainContainer = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  background-color: #000;
  font-size: 16px;
`;

const start = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

const Content = styled.section`
  height: 100%;
  flex: 11;
  width: 98%;
  margin: 1%;
  padding: 1%;
  box-sizing: border-box;
  border: 1px solid #38ffd1d6;
  animation: ${start} 0.3s ease-in;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: column wrap;

  & * {
    text-transform: uppercase;
    color: #7affe0d6;
    font-size: 0.7em;
    margin: 0;
    letter-spacing: .15em; /* Adjust as needed */
  }

  & .Typist {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    flex: 100%;
  }
`;

const showContent = css`
  opacity: 1;
  width: 100%;
  border: 1px solid #38ffd1d6;

  & > * {
    padding: 10px 0;
  }
`;

const Navigation = styled.header`
  opacity: 0;
  transition: opacity 2s linear;
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
  ${p => p.show ? `${showContent}` : ''}
`;

const NavigationItem = styled.span`
  cursor: pointer;
  ${p => p.selected ? 'background-color: #ffa400; color: black;' : ''}
`;


class Home extends Component {
  state = {
    doneAnimation: false,
    pSelected: false,
    ghSelected: false,
    expSelected: false,
    showMain: false
  }

  inputHandler = (e) => {
    const navLinks = ['projects', 'github', 'experience'];

    const filteredNav = navLinks.find((link) => {
      return link.includes(e.target.value.toLowerCase());
    })

    switch(filteredNav) {
      case 'projects':
      this.navState(true, false, false);
      break;
      case 'github':
      this.navState(false, true, false);
      break;
      case 'experience':
      this.navState(false, false, true);
      break;
      case '':
      this.navState();
      break;
      default:
      this.navState();
      break;
    }
  }

  navState = (project = false, github = false, exp = false) => {
    return this.setState({
      pSelected: project,
      ghSelected: github,
      expSelected: exp
    })
  }

  render() {
    const mainContent = this.state.showMain ? <Main /> : null;

    return (
      <MainContainer>
        <Content>
        <Navigation show={this.state.doneAnimation}>
            <p>Allen Tsai</p>
            <NavigationItem selected={this.state.pSelected}>Projects</NavigationItem>
            <NavigationItem selected={this.state.ghSelected}>GitHub</NavigationItem>
            <NavigationItem selected={this.state.expSelected}>Experience</NavigationItem>
          </Navigation>
          <Typist startDelay={500} onTypingDone={()=>this.setState({doneAnimation: true, showMain: true})} cursor={{hideWhenDone: true, hideWhenDoneDelay: 0}}>
            <p>Accessing Database...</p>
            <Typist.Backspace count={21} delay={50} />
            <p>Connecting...</p>
            <Typist.Backspace count={13} delay={500} />
            <p>Connected. Welcome.</p>
            <Typist.Backspace count={19} delay={500} />
          </Typist>
          { mainContent }
        </Content>
        <InputSection bgChange={this.state.doneAnimation} onChangeHandler={this.inputHandler}/>
      </MainContainer>
    );
  }
}

export default Home;
