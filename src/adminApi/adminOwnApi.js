import axios from '../utils/axios'

const url = '/admin/own'

function addOwn(userId, fileId, fileName, sort, description) {
  return axios.instance.post(url + '/addOwn', {
    userId: userId,
    fileId: fileId,
    fileName: fileName,
    sort: sort,
    description: description
  })
}

function removeOwn(ownId, userId, fileId, fileName, sort, description, createTime, updateTime) {
  return axios.instance.post(url + '/removeOwn', {
    ownId: ownId,
    userId: userId,
    fileId: fileId,
    fileName: fileName,
    sort: sort,
    description: description,
    createTime: createTime,
    updateTime: updateTime
  })
}

function getOwn(ownId) {
  return axios.instance.get(url + '/getOwn', {params: {ownId: ownId}})
}

function getOwnCount(pageSize, page, ownId, userId, fileId, fileName, sort, description, createTime, updateTime) {
  return axios.instance.get(url + '/getOwnCount', {
    params: {
      pageSize: pageSize,
      page: page,
      ownId: ownId,
      userId: userId,
      fileId: fileId,
      fileName: fileName,
      sort: sort,
      description: description,
      createTime: createTime,
      updateTime: updateTime
    }
  })
}


function listOwn(pageSize, page, ownId, userId, fileId, fileName, sort, description, createTime, updateTime) {
  return axios.instance.get(url + '/listOwn', {
    params: {
      pageSize: pageSize,
      page: page,
      ownId: ownId,
      userId: userId,
      fileId: fileId,
      fileName: fileName,
      sort: sort,
      description: description,
      createTime: createTime,
      updateTime: updateTime
    }
  })
}

function listSort(userId) {
  return axios.instance.get(url + '/listSort', {params: {userId: userId}})
}

function changeOwn(ownId, userId, fileId, fileName, sort, description) {
  return axios.instance.post(url + '/changeOwn', {
    ownId: ownId,
    userId: userId,
    fileId: fileId,
    fileName: fileName,
    sort: sort,
    description: description
  })
}

function checkAddOwn(userId, fileId, fileName, sort, description) {
  return axios.instance.get(url + '/checkAddOwn', {
    params: {
      userId: userId,
      fileId: fileId,
      fileName: fileName,
      sort: sort,
      description: description
    }
  })
}

function checkChangeOwn(ownId, userId, fileId, fileName, sort, description) {
  return axios.instance.get(url + '/checkChangeOwn', {
    params: {
      ownId: ownId,
      userId: userId,
      fileId: fileId,
      fileName: fileName,
      sort: sort,
      description: description
    }
  })
}

export default {
  addOwn: addOwn,
  removeOwn: removeOwn,
  getOwn: getOwn,
  getOwnCount: getOwnCount,
  listOwn: listOwn,
  listSort: listSort,
  changeOwn: changeOwn,
  checkAddOwn: checkAddOwn,
  checkChangeOwn: checkChangeOwn,
}
