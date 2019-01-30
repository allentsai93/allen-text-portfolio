import React, { Component } from 'react';
import styled, { keyframes,css } from 'styled-components';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';

const Container = styled.section`
    height: 100%;
    width: 100%;
    background-color: #122734;
    padding: 10px;

    & > * {
        color: white;
        text-transform: uppercase;
        letter-spacing: 5px;
        font-weight: 300;
    }
`;

const TopSection = styled.div`
    width: 100%;
    height: 50%;
    border: 1px solid white;
`;

class HackerEntry extends Component {
    render() {
        return (
            <Container>
                <TopSection>

                </TopSection>
                {this.props.children}
            </Container>
        )
    }
}

export default HackerEntry;