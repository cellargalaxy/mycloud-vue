import axios from '../utils/axios'

const url = '/user/user'

function getUser(userId, username, createTime, updateTime) {
  return axios.instance.get(url + '/getUser', {
    params: {
      userId: userId,
      username: username,
      createTime: createTime,
      updateTime: updateTime
    }
  })
}

function getUserAuthorization(userId, username, createTime, updateTime) {
  return axios.instance.get(url + '/getUserAuthorization', {
    params: {
      userId: userId,
      username: username,
      createTime: createTime,
      updateTime: updateTime
    }
  })
}

function changeUser(userId, username, userPassword) {
  return axios.instance.post(url + '/changeUser', {
    userId: userId,
    username: username,
    userPassword: userPassword
  })
}

function checkChangeUser(userId, username, userPassword) {
  return axios.instance.get(url + '/checkChangeUser', {
    params: {
      userId: userId,
      username: username,
      userPassword: userPassword
    }
  })
}

export default {
  getUser: getUser,
  getUserAuthorization: getUserAuthorization,
  changeUser: changeUser,
  checkChangeUser: checkChangeUser,
}
