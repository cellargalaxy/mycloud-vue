import axios from '../utils/axios'
import util from '../utils/util'

function login(username, password) {
  util.checkParameterAnd(null, {username: username, password: password}, 'username', 'password')
  return axios.tokenAxiosMethod.post('/login', {username: username, password: password})
}

export default {
  login: login,
}
