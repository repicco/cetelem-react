import { combineReducers } from "redux";

const initialState = {
    clients: [],
    clientsOriginal: []
}

const cetelem = (state = initialState, action) => {
    switch(action.type){
        case 'CREATE_CLIENT':
            return {...state, clients: [...state.clients, action.payload] }
        case 'HANDLE_CLIENT':
            return {...state, clients: action.payload }
        case 'CREATE_CLIENT_ORIGINAL':
            return {...state, clientsOriginal: [...state.clientsOriginal, action.payload] }
        case 'HANDLE_CLIENT_ORIGINAL':
            return {...state, clientsOriginal: action.payload}
        default:
            return state
    }
}

export const reducers = combineReducers({cetelem})

