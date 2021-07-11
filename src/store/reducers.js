import { combineReducers } from "redux";

const initialState = {
    clients: [{
        id: 1,
        name: 'Renato',
        lastName: 'Picco',
        age: '34',
        cep: '05176080',
        road: 'João Rodrigues Leite',
        number: '196',
        complement: 'Bloco03 Ap24',
        district: 'Vl Clarice',
        city: 'São Paulo',
        state: 'SP'
    }],
}

const cetelem = (state = initialState, action) => {
    switch(action.type){
        case 'CREATE_CLIENT':
            return {clients: [...state.clients, action.payload] }
        case 'HANDLE_CLIENT':
            return {clients: action.payload}
        default:
            return state
    }
}

export const reducers = combineReducers({cetelem})

