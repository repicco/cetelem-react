import { useState } from 'react';
import { handleClient } from '../../../store/actions'
import { useSelector, useDispatch } from 'react-redux'

import styled from 'styled-components'
import { StyleMainCard, StyleListContent } from '../style'
import { AiOutlineUnorderedList, AiFillDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";

import Modal from '../../../components/Modal';

const List = ({handleRegister, handleFilterClient}) => {
    const dispatch = useDispatch()
    const clients = useSelector(state => state.cetelem.clients)
    const [modalVisible, setModalVisible] = useState()
    const [clientItem, setClientItem] = useState()

    function changeItem(check, value){
        handleRegister(check)
        handleFilterClient(value)
    }

    function deleteModal(client){
        setModalVisible(true)
        setClientItem(client)
    }

    function removeItem(){
        const payload = clients.filter(item => item !== clientItem)
        dispatch(handleClient(payload))
        setModalVisible(false)
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
                                        <AiFillDelete className="icon" onClick={() => deleteModal(client)} />
                                    </div>
                                </div>       
                            ))
                        }
                    </StyleListContent>
                    <Modal visible={modalVisible} setVisible={setModalVisible} title={'Excluir cliente'} >
                        <StyleDeleteModal>
                            {
                               clientItem !== undefined &&
                               <>
                                <h3>Tem certeza que deseja excluir o usuário?</h3>
                                <div className="items">
                                    <div>
                                        <p>Nome: {clientItem.name} {clientItem.lastName}</p>
                                        <p>Idade: {clientItem.age} anos</p>
                                    </div>
                                    <div>
                                        <p>CEP: {clientItem.cep}</p>
                                    </div>
                                    <div>
                                        <p>Endereço: {clientItem.road}, {clientItem.number}, {clientItem.complement} - </p>
                                        <p>{clientItem.district} / {clientItem.city} - {clientItem.state}</p>
                                    </div> 
                                </div>
                                <div className="buttons">
                                    <button onClick={() => setModalVisible(false)}>Cancelar</button>
                                    <button onClick={() => removeItem()}>Excluir</button>
                                </div>
                               </>
                            }
                            
                        </StyleDeleteModal>
                    </Modal>
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

const StyleDeleteModal = styled.div`
    display: flex;
    flex-direction: column;
    h3 {
        margin-top: 1rem;
    }
    .items {
        div {
            display: flex;
            font-size: 1.1rem;
            p {
                padding: 0.5rem;
            }
        }
    }
    .buttons {
        margin-top: 1rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        button {
            margin: 0 1rem;
            font-size: 1.3rem;
            padding: 0.25rem 0.5rem;
            cursor: pointer;
            background: #a0be5b;
            color: #fff;
            border: 1px solid #a0be5b;
            border-radius: 4px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            .icon {
                margin-right: 0.5rem;
            }
            &:hover {
                color: #a0be5b;
                background: #ddd;
            }
            &:first-child {
                color: #a0be5b;
                background: #fff;
                &:hover {
                background: #ddd;
                }
            }
        }
    }
`