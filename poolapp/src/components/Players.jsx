import React from 'react';
import Styled from 'styled-components'
import { Link } from 'react-router-dom'

const Div = Styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    text-align: center;
    margin: 5px;
    background: white;
    font-weight: bold;
    font-size: 1.5rem;
    padding: 10px;
    p{
        padding: 5px;
    }
`
export const Players = props => {
    return (
        <Link to={`/singleplayer/${props.player.id}`}>
        <Div>
            <p>Name: {props.player.name}</p>
            <p>Age: {props.player.age}</p>
            <p>League Position: {props.player.leaguePosition}</p>
            </Div>
        </Link>

    )
}