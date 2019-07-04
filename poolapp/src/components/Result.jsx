import React from 'react';
import Styled from 'styled-components';

const Div = Styled.div`
    display: flex;
    margin-left: 10px;
    font-size: 0.75rem;
`

export const Result = props => {
    return (
        <Div>
            <p>Result: {props.result.result}..  RuleSet: {props.result.ruleset}..
                Pot: £{props.result.pot}.. Venue: {props.result.venue}.. Date: {props.result.date} </p>
        </Div>
    )
}