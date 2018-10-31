import axios from '../utils/axios'

const url = '/user/user'

function getUserVo() {
  return axios.tokenAxiosMethod.get(url + '/getUserVo', {})
}

function changeUser(userId, username, password) {
  return axios.tokenAxiosMethod.post(url + '/changeUser', {
    userId: userId,
    username: username,
    password: password
  })
}

export default {
  getUserVo: getUserVo,
  changeUser: changeUser,
}
