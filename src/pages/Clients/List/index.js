import { StyleMainCard, StyleListContent } from '../style'
import { AiOutlineUnorderedList, AiFillDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";

import { deleteClient } from '../../../store/actions'
import { useSelector, useDispatch } from 'react-redux'

const List = ({handleRegister}) => {
    const dispatch = useDispatch()
    const clients = useSelector(state => state.cetelem.clients)

    function changeItem(check, value){
        handleRegister(check)
        if(!check){

        }
    }

    function removeItem(client){
        const payload = clients.filter(item => item !== client)
        console.log(payload)
        dispatch(deleteClient(payload))
    }

    if(clients?.length > 0 || clients !== undefined){
        return (
            <>  
                <StyleMainCard>
                    <div className="title">
                        <div>
                            <AiOutlineUnorderedList className="icon"/>
                            <h2>Lista Clientes</h2>
                        </div>
                        <button onClick={() => changeItem(true)}>Novo Cliente</button>
                    </div>
                    <StyleListContent>
                        <div className="tableTitle">
                            <p>Nome</p>
                            <p>Sobrenome</p>
                            <p>Idade</p>
                            <p>Estado</p>
                            <p>Cidade</p>
                            <p>Ações</p>
                        </div>
                        {
                            clients.map((client, index) => (
                                <div className="tableBody" key={index}>
                                    <p>{client.name}</p>
                                    <p>{client.lastName}</p>
                                    <p>{client.age}</p>
                                    <p>{client.city}</p>
                                    <p>{client.state}</p>
                                    <div>
                                        <FiEdit className="icon" onClick={() => changeItem(false, client)}/>
                                        <AiFillDelete className="icon" onClick={() => removeItem(client)} />
                                    </div>
                                </div>       
                            ))
                        }
                    </StyleListContent>
                </StyleMainCard>
                
            </>
        )
    } else {
        return (
            <div>
                Carregando...
            </div>
        )
    }
}

export default List
