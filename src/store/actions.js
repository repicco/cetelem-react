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