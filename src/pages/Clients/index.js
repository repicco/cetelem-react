import { StyleClientsContainer } from './style';

import List from './List'
import Register from './Register'
import { useState } from 'react';
import { useEffect } from 'react';

const Clients = () => {
    const [handleRegister, setHandleRegister] = useState(null)
    const [filterClient, setFilterClient] = useState()

    useEffect(() => {console.log('Client',filterClient)}, [filterClient])

    return (
    <>  
        <StyleClientsContainer>
            <Register newUser={handleRegister} handleRegister={setHandleRegister} client={filterClient} />
            <List handleRegister={setHandleRegister} handleFilterClient={setFilterClient} />
        </StyleClientsContainer>
    </>
)}
  
export default Clients;

