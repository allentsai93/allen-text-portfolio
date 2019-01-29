import React, { Component } from 'react';
import styled, { keyframes,css } from 'styled-components';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';

const Container = styled.section`
    height: 100%;
    width: 100%;
    background-color: #122734;
`;

const StyledInput = styled.input`

`;
class HackerEntry extends Component {
    componentWillMount = () => {

    }
    
    render() {
        return (
            <Container>
                <StyledInput onChange={this.props.onChangeHandler}></StyledInput>
            </Container>
        )
    }
}

export default HackerEntry;