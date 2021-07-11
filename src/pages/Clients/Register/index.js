import { useState, useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux'
import { createClient, handleClient } from '../../../store/actions'

import { StyleMainCard, StyleRegisterContent} from '../style'
import styled  from 'styled-components'
import { FiEdit, FiXCircle, FiPlusCircle } from "react-icons/fi";
import { ImUserPlus } from "react-icons/im";

import Modal from '../../../components/Modal';

const Register = ({newUser, handleRegister, client}) => {
    const dispatch = useDispatch()
    const store = useSelector(state => state.cetelem.clients)
    const [modalVisible, setModalVisible] = useState()

    const [ form, setForm ] = useState({
        name: '',
        lastName: '',
        age: '',
        cep: '',
        road: '',
        number: '',
        complement: '',
        district: '',
        city: '',
        state: '',
    })

    useEffect(() => {
        newUser ? setForm({
            name: '',
            lastName: '',
            age: '',
            cep: '',
            road: '',
            number: '',
            complement: '',
            district: '',
            city: '',
            state: '',
        }) : setForm(client)
    }, [newUser, client])

    function requiredValidate(){
        let check = true
        Object.entries(form).forEach(([key, value]) => {
            if(key !== "complement") {
                if(value === ''){
                    check = false
                }
            }
        })
        return check
    }
    
    function checkDuplicated(store, payload){
        let duplicated = []
        const arrPayload = [payload]
        store.forEach(el => {
            duplicated = arrPayload.filter(item => item.name === el.name && item.lastName === el.lastName && item.cep === el.cep && item.number === el.number)
        })
        const newPayload = {...payload, id: store.length + 1}
        if(duplicated.length === 0){
            return newPayload
        } else {
            alert('Duplicado')
            return false
        }
    }

    function payloadModal(){
        const isValid = requiredValidate()
        if(isValid) {
            setModalVisible(true)
        } else {
            alert('*Favor preencher todos os campos obrigatórios')
        }
    }
    
    async function submit(){
        if(newUser) {
            const payload = (checkDuplicated(store, form))
            if(payload){
                await dispatch(createClient(payload))
            }
        } else {
            const payload = store.map(item => {
                return item === client ? form : item
            })
            dispatch(handleClient(payload))
        }
        setModalVisible(false)
    }

    if(newUser !== null && form !== undefined){
        return (
            <>
                <StyleMainCard>
                    <div className="title">
                        <div>
                            {
                                newUser ?
                                <>
                                    <ImUserPlus className="icon"/>
                                    <h2>Criar Cliente</h2>
                                </>
                                :
                                <>
                                    <FiEdit className="icon"/>
                                    <h2>Editar Cliente</h2>
                                </>
                            }
                        </div>
                        <div>
                            
                        </div>
                    </div>
                    <StyleRegisterContent>
                        <form>                           
                            <label>
                                *Nome:
                                <input type="text" id="name" value={form.name} onInput={el => setForm( {...form, name: el.target.value} )}/>
                            </label>
                            <label>
                                *Sobrenome:
                                <input type="text" id="lastName" value={form.lastName} onInput={el => setForm( {...form, lastName: el.target.value})}/>
                            </label>
                            <label>
                                *Idade:
                                <input type="number" id="age" value={form.age} onInput={el => setForm( {...form, age: el.target.value})}/>
                            </label>
                            <label>
                                *CEP:
                                <input type="number" id="cep" value={form.cep} onInput={el => setForm( {...form, cep: el.target.value})}/>
                            </label>
                            <label>
                                *Rua:
                                <input type="text" id="road" value={form.road} onInput={el => setForm( {...form, road: el.target.value})}/>
                            </label>
                            <label>
                                *Número:
                                <input type="number" id="number" value={form.number} onInput={el => setForm( {...form, number: el.target.value})}/>
                            </label>
                            <label>
                                Complemento:
                                <input type="text" id="complement" value={form.complement}  onInput={el => setForm( {...form, complement: el.target.value})}/>
                            </label>
                            <label>
                                *Bairro:
                                <input type="text" id="district" value={form.district}   onInput={el => setForm( {...form, district: el.target.value})}/>
                            </label>
                            <label>
                                *Cidade:
                                <input type="text" id="city" value={form.city}  onInput={el => setForm( {...form, city: el.target.value})}/>
                            </label>
                            <label>
                                *Estado:
                                <input type="text" id="state" value={form.state}  onInput={el => setForm( {...form, state: el.target.value})}/>
                            </label>
                        </form>
                        <div>
                            <button onClick={() => handleRegister(null)} >
                                <FiXCircle className="icon"/>
                                Cancelar
                            </button>
                            <button onClick={payloadModal}>
                                <FiPlusCircle className="icon"/>
                                Salvar
                            </button>
                        </div>
                    </StyleRegisterContent>
                    <Modal visible={modalVisible} setVisible={setModalVisible} title={newUser ? 'Criar cliente' : 'Atualizar cliente'} >
                        <StyleRegisterModal>
                            {
                                newUser ? <h3>Tem certeza que deseja criar o usuário?</h3> : <h3>Tem certeza que deseja editar o usuário?</h3>
                            }
                            <div className="items">
                                <div>
                                    <p>Nome: {form.name} {form.lastName}</p>
                                    <p>Idade: {form.age} anos</p>
                                </div>
                                <div>
                                    <p>CEP: {form.cep}</p>
                                </div>
                                <div>
                                    
                                    <p>Endereço: {form.road}, {form.number}, {form.complement} - </p>
                                    <p>{form.district} / {form.city} - {form.state}</p>
                                </div> 
                            </div>
                            <div className="buttons">
                                <button onClick={() => setModalVisible(false)}>Cancelar</button>
                                <button onClick={submit}>Criar</button>
                            </div>
                        </StyleRegisterModal>
                    </Modal>
                </StyleMainCard>
            </>
        )
    } else {
        return (
            <>
            </>
        )
    }

    
}

export default Register




const StyleRegisterModal = styled.div`
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