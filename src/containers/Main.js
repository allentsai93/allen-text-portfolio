import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const init = keyframes`
    from {
        opacity: 0;
        width: 0;
    }

    to {
        opacity: 1;
        width: 100%;
    }
`;

const MainSection = styled.section`
    animation: ${init} 300ms forwards 500ms;
    border: 1px solid #38ffd1d6;
`;

class Main extends Component {

    componentWillMount = () => {

    }

    render() {
        return (
            <MainSection>
                <p>MAIN CONTENT!!!</p>
            </MainSection>
        )
    }
}

export default Main;