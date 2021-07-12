import axios from 'axios'

export const viaCep = axios.create({
    baseURL: 'http://viacep.com.br/ws'
})