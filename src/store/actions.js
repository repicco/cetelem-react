export function createClient(payload){
    return{
        type: 'CREATE_CLIENT',
        payload,
    }
}

export function handleClient(payload){
    return{
        type: 'HANDLE_CLIENT',
        payload,
    }
}

export function createClientOriginal(payload){
    return{
        type: 'CREATE_CLIENT_ORIGINAL',
        payload,
    }
}

export function handleClientOriginal(payload){
    return{
        type: 'HANDLE_CLIENT_ORIGINAL',
        payload,
    }
}