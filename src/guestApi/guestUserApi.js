import axios from '../utils/axios'

const url = '/guest/user'

function getUserVo() {
  return axios.tokenAxiosMethod.get(url + '/getUserVo', {})
}

function getGuestToken() {
  return axios.tokenAxiosMethod.get(url + '/getGuestToken', {})
}

export default {
  getUserVo: getUserVo,
  getGuestToken: getGuestToken,
}
