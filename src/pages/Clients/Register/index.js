import { useState, useEffect, useMemo } from 'react';
import { useDispatch,useSelector } from 'react-redux'
import { createClient, createClientOriginal, handleClient, handleClientOriginal } from '../../../store/actions'
import { viaCep } from '../../../services/api'

import { StyleMainCard, StyleRegisterContent} from '../style'
import styled  from 'styled-components'
import { FiEdit, FiXCircle, FiPlusCircle } from "react-icons/fi";
import { ImUserPlus } from "react-icons/im";
import Cep from "react-simple-cep-mask";

import Modal from '../../../components/Modal';
import Alert from '../../../components/Alert'

const Register = ({newUser, handleRegister, client}) => {
    const dispatch = useDispatch()
    const store = useSelector(state => state.cetelem.clients)
    const [modalVisible, setModalVisible] = useState()
    const [alert, setAlert] = useState({visible: false, message: ''})

    const startForm = useMemo(() => ({
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
    }), [])

    const [ form, setForm ] = useState(startForm)

    useEffect(() => {
        newUser ? setForm(startForm) : setForm(client)
    }, [newUser, client, startForm])

    function validateAge(value){
        if(value > 100){
            setAlert({visible: true, message: 'Idade acima de 100 anos, certeza?', type: 'alert'})
        }
    }

    async function validateCep(value){
        if(value.length === 8){
            const response = await viaCep.get(`/${value}/json/`)
            if(!response.data.erro){
                const viacep = response.data
                setForm({...form, road: viacep.logradouro, district: viacep.bairro, city: viacep.localidade, state: viacep.uf})
            } else {
                setAlert({visible: true, message: 'CEP Inválido', type: 'alert'})
            }
        } else {
            setAlert({visible: true, message: 'CEP Incompleto', type: 'alert'})
        }
    }

    function requiredValidate(){
        let check = true
        Object.entries(form).forEach(([key, value]) => {
            if(key !== "complement") {
                if(value === ''){
                    check = false
                    document?.getElementById(key)?.classList?.add('requiredInput')
                    setTimeout(() => {
                        document?.getElementById(key)?.classList?.remove('requiredInput')
                    }, 4000)
                }
            }
        })
        return check
    }

    function payloadModal(){
        const isValid = requiredValidate()
        if(isValid) {
            if(!newUser){
                setModalVisible(true)
            } else if(checkDuplicated(store, form)){
                setModalVisible(true)
            }   
        } else {
            setAlert({visible: true, message: 'Favor preencher todos os campos obrigatórios', type: 'alert'})
        }
    }
    
    function checkDuplicated(store, form){
        let duplicated = []
        const arrPayload = [form]
        store.forEach(el => {
            duplicated = arrPayload.filter(item => item.name === el.name && item.lastName === el.lastName && item.cep === el.cep && item.number === el.number)
        })
        const payload = {...form, id: store.length + 1}
        if(duplicated.length === 0){
            return payload
        } else {
            setAlert({visible: true, message: 'Cliente já existe, favor editar ou validar os dados', type: 'alert'})
            return false
        }
    }
    
    async function submit(){
        if(newUser) {
            const payload = (checkDuplicated(store, form))
            if(payload){
                dispatch(createClient(payload))
                dispatch(createClientOriginal(payload))
            }
            setAlert({visible: true, message: 'Cliente criado com sucesso', type: 'success'})
        } else {
            const payload = store.map(item => {
                return item === client ? form : item
            })
            dispatch(handleClient(payload))
            dispatch(handleClientOriginal(payload))
            setAlert({visible: true, message: 'Cliente atualizado com sucesso', type: 'success'})
        }
        setModalVisible(false)
        setTimeout(() => handleRegister(null), 3500)
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
                                <p><span className="required">*</span>Nome:</p>
                                <input type="text" id="name" value={form.name} onInput={el => setForm( {...form, name: el.target.value} )}/>
                            </label>
                            <label>
                                <p><span className="required">*</span>Sobrenome:</p>
                                <input type="text" id="lastName" value={form.lastName} onInput={el => setForm( {...form, lastName: el.target.value})}/>
                            </label>
                            <label>
                                <p><span className="required">*</span>Idade:</p>
                                <input type="number" max="200" id="age" value={form.age} onInput={el => setForm( {...form, age: el.target.value})} onBlur={(el) => validateAge(+el.target.value)}/>
                            </label>
                            
                            <label>
                                <p><span className="required">*</span>CEP:</p>
                                <Cep
                                    value={form.cep}
                                    id="cep"
                                    onChange={el => setForm( {...form, cep: el})}
                                    onBlur={(el) => validateCep(el.target.value.replace('-', ''))}
                                />
                            </label>
                            <label>
                                <p><span className="required">*</span>Endereço:</p>
                                <input type="text" id="road" value={form.road} disabled onInput={el => setForm( {...form, road: el.target.value})}/>
                            </label>
                            <label>
                                <p><span className="required">*</span>Número:</p>
                                <input type="number" id="number" value={form.number} onInput={el => setForm( {...form, number: el.target.value})}/>
                            </label>
                            <label>
                                <p>Complemento:</p>
                                <input type="text" id="complement" value={form.complement}  onInput={el => setForm( {...form, complement: el.target.value})}/>
                            </label>
                            <label>
                                <p><span className="required">*</span>Bairro:</p>
                                <input type="text" id="district" value={form.district} disabled  onInput={el => setForm( {...form, district: el.target.value})}/>
                            </label>
                            <label>
                                <p><span className="required">*</span>Cidade:</p>
                                <input type="text" id="city" value={form.city} disabled onInput={el => setForm( {...form, city: el.target.value})}/>
                            </label>
                            <label>
                                <p><span className="required">*</span>Estado:</p>
                                <input type="text" id="state" value={form.state} disabled onInput={el => setForm( {...form, state: el.target.value})}/>
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
                                    <p>Endereço: {form.road}, {form.number}, {form.complement} </p>
                                    <p>{form.district} / {form.city} - {form.state}</p>
                                </div> 
                            </div>
                            <div className="buttons">
                                <button onClick={() => setModalVisible(false)}>Cancelar</button>
                                <button onClick={submit}>Criar</button>
                            </div>
                        </StyleRegisterModal>
                    </Modal>
                    <Alert visible={alert.visible} setVisible={setAlert} type={alert.type}>
                        <p>{alert.message}</p>
                    </Alert>
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
            flex-direction: column;
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
    @media(min-width: 992px) {
        .items {
            div {
                flex-direction: row;
            }
        }
    }
`