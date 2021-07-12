import { useState } from 'react';

import { StyleClientsContainer } from './style';

import List from './List'
import Register from './Register'


const Clients = () => {
    const [handleRegister, setHandleRegister] = useState(null)
    const [filterClient, setFilterClient] = useState()

    return (
    <>  
        <StyleClientsContainer>
            <Register newUser={handleRegister} handleRegister={setHandleRegister} client={filterClient} />
            <List handleRegister={setHandleRegister} handleFilterClient={setFilterClient} />
        </StyleClientsContainer>
    </>
)}
  
export default Clients;

