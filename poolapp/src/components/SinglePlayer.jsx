import React from 'react';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Result } from './Result';

const Div = Styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    font-size: 2 rem;
    margin: 10px auto;
    font-size: 2rem;
    height: auto;
    width: auto;
    p{
        margin: 5px;
    }
`
export const SinglePlayer = props => {
    console.log(props.player.prevResults)
    return (
        <Div>
            <p>Name: {props.player.name}</p>
            <p>Age: {props.player.age}</p>
            <p>Nickname: {props.player.nickname}</p>
            <p>Cue: {props.player.cue}</p>
            <p>Total prize money: £{props.player.prizeMoneyWon}</p>
            <p>Games Won: {props.player.gamesWon}</p>
            <p>Games Lost: {props.player.gamesLost}</p>
            <p>Form: {props.player.form}</p>    
            <p>Previous Results: {props.player.prevResults.map(element => { return <Result result={element} /> })} </p>
            <p>Highest League Position: {props.player.highestPosition}</p>
            <p>Lowest League Position: {props.player.lowestPosition}</p>
            <p>Times Challenged: {props.player.timesChallenged}</p>
            <p>Challenges Issued: {props.player.challengesIssued}</p>
            
        </Div>
    )
}