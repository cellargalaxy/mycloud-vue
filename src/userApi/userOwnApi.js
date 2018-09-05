import axios from '../utils/axios'

const url = '/user/own'

function addOwn(fileId, fileName, sort, description) {
  return axios.instance.post(url + '/addOwn', {
    fileId: fileId,
    fileName: fileName,
    sort: sort,
    description: description
  })
}

function removeOwn(fileId, fileName, sort, description, createTime, updateTime) {
  return axios.instance.post(url + '/removeOwn', {
    fileId: fileId,
    fileName: fileName,
    sort: sort,
    description: description,
    createTime: createTime,
    updateTime: updateTime
  })
}

function getOwn(fileId, fileName, sort, description, createTime, updateTime) {
  return axios.instance.get(url + '/getOwn', {
    params: {
      fileId: fileId,
      fileName: fileName,
      sort: sort,
      description: description,
      createTime: createTime,
      updateTime: updateTime
    }
  })
}

function getOwnCount(pageSize, page, fileId, fileName, sort, description, createTime, updateTime) {
  return axios.instance.get(url + '/getOwnCount', {
    params: {
      pageSize: pageSize,
      page: page,
      fileId: fileId,
      fileName: fileName,
      sort: sort,
      description: description,
      createTime: createTime,
      updateTime: updateTime
    }
  })
}

function listOwn(pageSize, page, fileId, fileName, sort, description, createTime, updateTime) {
  return axios.instance.get(url + '/listOwn', {
    params: {
      pageSize: pageSize,
      page: page,
      fileId: fileId,
      fileName: fileName,
      sort: sort,
      description: description,
      createTime: createTime,
      updateTime: updateTime
    }
  })
}

function listSort(pageSize, page, fileId, fileName, sort, description, createTime, updateTime) {
  return axios.instance.get(url + '/listSort', {
    params: {
      pageSize: pageSize,
      page: page,
      fileId: fileId,
      fileName: fileName,
      sort: sort,
      description: description,
      createTime: createTime,
      updateTime: updateTime
    }
  })
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

function checkAddOwn(fileId, fileName, sort, description) {
  return axios.instance.get(url + '/checkAddOwn', {
    params: {
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
