import axios from 'axios'
import {
    GETTING_PLAYERS,
    GETTING_PLAYERS_SUCCESS,
    GETTING_PLAYERS_FAILURE,
    ADDING_PLAYER,
    ADDING_PLAYER_SUCCESS,
    ADDING_PLAYER_FAILURE,
} from './actionTypes'

const baseUrl = 'https://telfordpoolapi.herokuapp.com/players';

export const getPlayers = () => dispatch => {
    dispatch({ type: GETTING_PLAYERS });
    return axios
        .get(baseUrl)
        .then(res => {
            // console.log('GetPLayers firing')
            dispatch({ type: GETTING_PLAYERS_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: GETTING_PLAYERS_FAILURE, payload: err.msg })
    })
}
export const addPlayer = (newPlayer) => dispatch => {
    dispatch({ type: ADDING_PLAYER });
    return axios
        .post(baseUrl, newPlayer)
        .then(res => {
            // console.log('Add Players firing')
            dispatch({ type: ADDING_PLAYER_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: ADDING_PLAYER_FAILURE, payload: err.msg })
        })
}

