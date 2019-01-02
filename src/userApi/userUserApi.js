import axios from '../utils/axios'

const url = '/user/user'

function changeUser(userId, username, password) {
  return axios.tokenAxiosMethod.post(url + '/changeUser', {
    userId: userId,
    username: username,
    password: password
  })
}

export default {
  changeUser: changeUser,
}
