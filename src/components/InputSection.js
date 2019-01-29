import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    flex: 1; 
    max-height: 8vh;
    ${p => p.bgChange ? "background-color: #38ffd1d6; flex-grow: 1; padding: 0 10px;" : 'background-color: #000; flex-grow: 0;'};
    transition: background-color 100ms ease-in, flex-grow 300ms ease-in;
    will-change: transition, flex-grow;

    & * {
        ${p => p.bgChange ? '' : 'display: none'}
    }


`;

const StyledInput = styled.input`
    background-color: black;
    border: none;
    padding: 10px 10px;
    color: #38ffd1d6;
    font-size: 0.5em;
    text-transform: uppercase;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: flex-start;
    & > p {
        margin: 0;
        font-size: 0.7em;
        text-transform: uppercase;
        text-align: center;
        letter-spacing: 1px;
        margin-bottom: 5px;
    }
`;

const InputSection = (props) => {
    return (
        <StyledContainer bgChange={props.bgChange}>
            <ContentContainer>
                <p>Navigation Input</p>
                <StyledInput onChange={props.onChangeHandler}/>
            </ContentContainer>
            
        </StyledContainer>
    )
};

export default InputSection;