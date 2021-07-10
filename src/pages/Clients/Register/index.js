import { StyleMainCard, StyleRegisterContent} from '../style'
import { FiEdit, FiXCircle, FiPlusCircle } from "react-icons/fi";
import { useState } from 'react';

import { handleClient } from '../../../store/actions'
import { useDispatch,useSelector } from 'react-redux'
import { ImUserPlus } from "react-icons/im";

const Register = ({newUser, handleRegister}) => {
    const dispatch = useDispatch()
    const store = useSelector(state => state.cetelem.clients)

    let startForm = {}
    if(newUser) {
        startForm = {
            name: 'Renato',
            lastName: 'Picco',
            age: '34',
            cep: '05176080',
            road: 'Teste',
            number: '34554',
            complement: '',
            district: 'sdsa',
            city: 'dadsa',
            state: 'dasda',
        }
    }
    
    const [ form, setForm ] = useState(startForm)

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
            duplicated = arrPayload.filter(item => item === el)
        })
        if(duplicated.length === 0){
            return payload
        } else {
            alert('Duplicado')
            return false
        }
    }
    

    async function submit(){
        const isValid = requiredValidate()
        if(isValid) {
            const payload = (checkDuplicated(store, form))
            if(payload){
                await dispatch(handleClient(payload))
            }
            console.log('register',store)
        } else {
            alert('*Favor preencher todos os campos obrigatórios')
        }
    }

    function clearForm(){
        setForm(startForm)
    }

    if(newUser !== null ){
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
                            <button onClick={clearForm} onClick={() => handleRegister(null)} >
                                <FiXCircle className="icon"/>
                                Cancelar
                            </button>
                            <button onClick={submit}>
                                <FiPlusCircle className="icon"/>
                                Salvar
                            </button>
                        </div>
                    </StyleRegisterContent>
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