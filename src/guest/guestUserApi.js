import axios from '../utils/axios'

const url = '/guest/user'

function getUserVo() {
  return axios.tokenAxiosMethod.get(url + '/getUserVo', {})
}

export default {
  getUserVo: getUserVo,
}
