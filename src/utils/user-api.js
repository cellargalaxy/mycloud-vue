import axios from './axios'
import util from './util'
import publicApi from './public-api'

// fileInfo
function getFileInfoByMd5(md5) {
  return getFileInfo(0, md5, 0, null, null)
}

function getFileInfoByQuery(query) {
  return getFileInfo(query.fileId, query.md5, query.fileLength, query.contentType, query.createTime)
}

function getFileInfo(fileId, md5, fileLength, contentType, createTime) {
  return axios.instance.get('/user/fileInfo/getFileInfo', {
    params: {
      fileId: fileId,
      md5: md5,
      fileLength: fileLength,
      contentType: contentType,
      createTime: createTime
    }
  })
}

// file

function uploadFile(files, sort, description) {
  util.checkParameter(null, files, sort)
  const param = new FormData()
  for (let i = 0; i < files.length; i++) {
    param.append('files', files[i])
  }
  param.append('sort', sort)
  param.append('description', description)
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': publicApi.getToken()
    }
  }
  return axios.baseAxios.post(axios.baseURL + '/user/file/uploadFile', param, config)
}

// own

function addOwn(fileId, fileName, sort, description) {
  util.checkParameter('确认添加？', fileId, fileName, sort)
  return axios.instance.post('/user/own/addOwn', {
    fileId: fileId,
    fileName: fileName,
    sort: sort,
    description: description
  })
}

function removeOwn(fileId) {
  util.checkParameter('确认删除？', fileId)
  return axios.instance.post('/user/own/removeOwn', {
    fileId: fileId,
    fileName: null,
    sort: null,
    description: null,
    createTime: null,
    updateTime: null
  })
}

function getOwnByQuery(query) {
  return getOwn(query.fileId, query.fileName, query.sort, query.description, query.createTime, query.updateTime)
}

function getOwn(fileId, fileName, sort, description, createTime, updateTime) {
  return axios.instance.get('/user/own/getOwn', {
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

function getOwnCountByQuery(query) {
  return getOwnCount(query.pageSize, query.page, query.fileId, query.fileName, query.sort, query.description, query.createTime, query.updateTime)
}

function getOwnCount(pageSize, page, fileId, fileName, sort, description, createTime, updateTime) {
  return axios.instance.get('/user/own/getOwnCount', {
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

function listOwnByQuery(query) {
  return listOwn(query.pageSize, query.page, query.fileId, query.fileName, query.sort, query.description, query.createTime, query.updateTime)
}

function listOwn(pageSize, page, fileId, fileName, sort, description, createTime, updateTime) {
  return axios.instance.get('/user/own/listOwn', {
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

function listSortByQuery(query) {
  return listSort(query.pageSize, query.page, query.fileId, query.fileName, query.sort, query.description, query.createTime, query.updateTime)
}

function listSort(pageSize, page, fileId, fileName, sort, description, createTime, updateTime) {
  return axios.instance.get('/user/own/listSort', {
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
  util.checkParameter('确认修改？', ownId, userId, fileId, fileName, sort)
  return axios.instance.post('/user/own/changeOwn', {
    ownId: ownId,
    userId: userId,
    fileId: fileId,
    fileName: fileName,
    sort: sort,
    description: description
  })
}

function checkAddOwn(fileId, fileName, sort, description) {
  return axios.instance.get('/user/own/checkAddOwn', {
    params: {
      fileId: fileId,
      fileName: fileName,
      sort: sort,
      description: description
    }
  })
}

function checkChangeOwn(ownId, userId, fileId, fileName, sort, description) {
  return axios.instance.get('/user/own/checkChangeOwn', {
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

// user

function getUser(userId, username, createTime, updateTime) {
  return axios.instance.get('/user/user/getUser', {
    params: {
      userId: userId,
      username: username,
      createTime: createTime,
      updateTime: updateTime
    }
  })
}

function getUserAuthorizationByQuery(query) {
  return getUserAuthorization(query.userId, query.username, query.createTime, query.updateTime)
}

function getUserAuthorization(userId, username, createTime, updateTime) {
  return axios.instance.get('/user/user/getUserAuthorization', {
    params: {
      userId: userId,
      username: username,
      createTime: createTime,
      updateTime: updateTime
    }
  })
}

function changeUser(userId, username, userPassword) {
  util.checkParameter('确认修改？', userId, username, userPassword)
  return axios.instance.post('/user/user/changeUser', {
    userId: userId,
    username: username,
    userPassword: userPassword
  })
}

function checkChangeUser(userId, username, userPassword) {
  return axios.instance.get('/user/user/checkChangeUser', {
    params: {
      userId: userId,
      username: username,
      userPassword: userPassword
    }
  })
}

export default {
  getFileInfoByMd5: getFileInfoByMd5,
  getFileInfoByQuery: getFileInfoByQuery,
  getFileInfo: getFileInfo,
  uploadFile: uploadFile,
  addOwn: addOwn,
  removeOwn: removeOwn,
  getOwnByQuery: getOwnByQuery,
  getOwn: getOwn,
  getOwnCountByQuery: getOwnCountByQuery,
  getOwnCount: getOwnCount,
  listOwnByQuery: listOwnByQuery,
  listOwn: listOwn,
  listSortByQuery: listSortByQuery,
  listSort: listSort,
  changeOwn: changeOwn,
  checkAddOwn: checkAddOwn,
  checkChangeOwn: checkChangeOwn,
  getUser: getUser,
  getUserAuthorizationByQuery: getUserAuthorizationByQuery,
  getUserAuthorization: getUserAuthorization,
  changeUser: changeUser,
  checkChangeUser: checkChangeUser
}
