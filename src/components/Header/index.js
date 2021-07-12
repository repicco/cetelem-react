import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handleClient } from '../../store/actions'

import logo from '../../assets/img/logo.png'
import { StyleHeader } from './style'
import { AiOutlineSearch } from "react-icons/ai";

import Alert from '../Alert'

const Header = () => {
  const dispatch = useDispatch()
  const store = useSelector(state => state.cetelem)
  const [filter, setFilter] = useState('')
  const [alert, setAlert] = useState({visible: false, message: ''})

  useEffect(() => console.log(store), [store])

  function handleFilter(){
    const original = store.clientsOriginal
    if(filter === ''){
      console.log(filter)
      dispatch(handleClient(original))
      setAlert({visible: true, message: 'Sem retorno para sua pesquisa', type: 'alert'})
      return
    }
    if(store.clients?.length !== 0 && filter !== undefined){
      const payload = []
      store.clients?.forEach(el => {
        const filterElement = filter.toLowerCase()
        if(el.name.toLowerCase() === filterElement || el.lastName.toLowerCase() === filterElement || el.age.toLowerCase() === filterElement || el.cep.toLowerCase() === filterElement || el.road.toLowerCase() === filterElement || el.number.toLowerCase() === filterElement || el.complement.toLowerCase() === filterElement || el.district.toLowerCase() === filterElement || el.city.toLowerCase() === filterElement || el.state.toLowerCase() === filterElement ){
          payload.push(el)
        }
      })
      if(payload.length !== 0){
        dispatch(handleClient(payload))
      } else {
        dispatch(handleClient(original))
        setAlert({visible: true, message: 'Sem retorno para sua pesquisa', type: 'alert'})
      }
    } 
  }

  return (
    <StyleHeader>
      <div className="container">
        <img src={logo} alt="logo" />
        <nav>
          <div className="active">
            <a href="/">ADM CLIENTES</a>
          </div>
          <div>
            <a href="/">CARTÕES</a>
          </div>
        </nav>
        <div className="search">
          <input type="text" value={filter} onInput={el => setFilter(el.target.value)} placeholder="BUSCAR" />
          <AiOutlineSearch className="icon" onClick={handleFilter} />
        </div>
        <div className="clientArea">
           <label>
            ÁREA DO CLIENTE
            <input type="text" id="cpf" placeholder="Digite seu CPF" />
          </label>
          <button>ACESSAR</button>
        </div>
      </div>
      <Alert visible={alert.visible} setVisible={setAlert} type={alert.type}>
          <p>{alert.message}</p>
      </Alert>
    </StyleHeader>
)}

export default Header