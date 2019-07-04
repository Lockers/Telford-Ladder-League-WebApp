import {
    GETTING_PLAYERS,
    GETTING_PLAYERS_SUCCESS,
    GETTING_PLAYERS_FAILURE,
    ADDING_PLAYER,
    ADDING_PLAYER_SUCCESS,
    ADDING_PLAYER_FAILURE,
} from '../actions/actionTypes'

const initialState = {
    gettingPlayers: false,
    players: [],
    addingPlayer: false,
    error: null
}

export const playerReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETTING_PLAYERS:
            return {
                ...state,
                gettingPlayers: true
            };
        case GETTING_PLAYERS_SUCCESS:
            return {
                ...state,
                gettingPlayers: false,
                players: action.payload
            };
        case GETTING_PLAYERS_FAILURE:
            return {
                ...state,
                gettingPlayers: false,
                error: action.payload
            };
        case ADDING_PLAYER:
            return {
                ...state,
                addingPlayer: true,
                error: action.payload
            };
        case ADDING_PLAYER_SUCCESS:
            return {
                ...state,
                gettingPlayers: false,
                players: action.payload
            };
        case ADDING_PLAYER_FAILURE:
            return {
                ...state,
                gettingPlayers: false,
                error: action.payload
            };
            default: return state
    }
}