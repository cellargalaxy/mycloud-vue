import axios from '../utils/axios'

const url = '/admin/user'

function addUser(username, userPassword) {
  return axios.instance.post(url + '/addUser', {username: username, userPassword: userPassword})
}

function removeUser(userId) {
  return axios.instance.post(url + '/removeUser', {userId: userId})
}

function getUser(userId) {
  return axios.instance.get(url + '/getUser', {params: {userId: userId}})
}

function getUserCount(pageSize, page, userId, username, createTime, updateTime) {
  return axios.instance.get(url + '/getUserCount', {
    params: {
      pageSize: pageSize,
      page: page,
      userId: userId,
      username: username,
      createTime: createTime,
      updateTime: updateTime
    }
  })
}

function listUser(pageSize, page, userId, username, createTime, updateTime) {
  return axios.instance.get(url + '/listUser', {
    params: {
      pageSize: pageSize,
      page: page,
      userId: userId,
      username: username,
      createTime: createTime,
      updateTime: updateTime
    }
  })
}

function getUserAuthorization(userId) {
  return axios.instance.get(url + '/getUserAuthorization', {params: {userId: userId}})
}

function listUserAuthorization(pageSize, page, userId, username, createTime, updateTime) {
  return axios.instance.get(url + '/listUserAuthorization', {
    params: {
      pageSize: pageSize,
      page: page,
      userId: userId,
      username: username,
      createTime: createTime,
      updateTime: updateTime
    }
  })
}

function getUserOwn(userId) {
  return axios.instance.get(url + '/getUserOwn', {params: {userId: userId}})
}

function listUserOwn(pageSize, page, userId, username, createTime, updateTime) {
  return axios.instance.get(url + '/listUserOwn', {
    pageSize: pageSize,
    page: page,
    userId: userId,
    username: username,
    createTime: createTime,
    updateTime: updateTime
  })
}

function changeUser(userId, username, userPassword) {
  return axios.instance.post(url + '/changeUser', {
    userId: userId,
    username: username,
    userPassword: userPassword
  })
}

function checkAddUser(username, userPassword) {
  return axios.instance.get(url + '/checkAddUser', {
    params: {
      username: username,
      userPassword: userPassword
    }
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
  addUser: addUser,
  removeUser: removeUser,
  getUser: getUser,
  getUserCount: getUserCount,
  listUser: listUser,
  getUserAuthorization: getUserAuthorization,
  listUserAuthorization: listUserAuthorization,
  getUserOwn: getUserOwn,
  listUserOwn: listUserOwn,
  changeUser: changeUser,
  checkAddUser: checkAddUser,
  checkChangeUser: checkChangeUser,
}
