import React, { Component } from 'react';
import styled, { keyframes,css } from 'styled-components';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';

const Container = styled.section`
    height: 100%;
    width: 100%;
    background-color: #122734;
`;

class HackerEntry extends Component {
    render() {
        return (
            <Container>
                {this.props.children}
            </Container>
        )
    }
}

export default HackerEntry;