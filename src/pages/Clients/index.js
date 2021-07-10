import { StyleClientsContainer } from './style';

import List from './List'
import Register from './Register'
import { useState } from 'react';

const Clients = () => {
    const [handleRegister, setHandleRegister] = useState(null)

    return (
    <>  
        <StyleClientsContainer>
            <Register newUser={handleRegister} handleRegister={setHandleRegister} />
            <List handleRegister={setHandleRegister} />
        </StyleClientsContainer>
    </>
)}
  
export default Clients;

