import axios from "axios";

const api_client = axios.create({
  // baseURL: 'https://sujeitoprogramador.com/'
  // baseURL: '// https://free.currencyconverterapi.com/api/v5/'
  baseURL: 'https://viacep.com.br/ws/'

})

export default api_client