export function handleClient(payload){
    return{
        type: 'HANDLE_CLIENT',
        payload,
    }
}

export function deleteClient(payload){
    return{
        type: 'DELETE_CLIENT',
        payload,
    }
}