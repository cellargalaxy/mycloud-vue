import axios from './axios'
import util from './util'

// exceptionInfo

function clearExceptionInfo() {
  return axios.instance.post('/admin/log/clearExceptionInfo', {})
}

function getExceptionInfoCount() {
  return axios.instance.get('/admin/log/getExceptionInfoCount', {params: {}})
}

function listExceptionInfo() {
  return axios.instance.get('/admin/log/listExceptionInfo', {params: {}})
}

// authorization

function addAuthorization(userId, permissionId) {
  util.checkParameter('确认添加？', userId, permissionId)
  return axios.instance.post('/admin/authorization/addAuthorization', {userId: userId, permissionId: permissionId})
}

function removeAuthorization(authorizationId) {
  util.checkParameter('确认删除？', authorizationId)
  return axios.instance.post('/admin/authorization/removeAuthorization', {authorizationId: authorizationId})
}

function getAuthorization(authorizationId) {
  return axios.instance.get('/admin/authorization/getAuthorization', {params: {authorizationId: authorizationId}})
}

function getAuthorizationCount(pageSize, page, authorizationId, userId, permissionId, createTime, updateTime) {
  return axios.instance.get('/admin/authorization/getAuthorizationCount', {
    params: {
      pageSize: pageSize,
      page: page,
      authorizationId: authorizationId,
      userId: userId,
      permissionId: permissionId,
      createTime: createTime,
      updateTime: updateTime
    }
  })
}

function listAuthorizationByQuery(query) {
  return listAuthorization(query.pageSize, query.page, query.authorizationId, query.userId, query.permissionId, query.createTime, query.updateTime)
}

function listAuthorization(pageSize, page, authorizationId, userId, permissionId, createTime, updateTime) {
  return axios.instance.get('/admin/authorization/listAuthorization', {
    params: {
      pageSize: pageSize,
      page: page,
      authorizationId: authorizationId,
      userId: userId,
      permissionId: permissionId,
      createTime: createTime,
      updateTime: updateTime
    }
  })
}

function changeAuthorization(authorizationId, userId, permissionId) {
  util.checkParameter('确认修改？', authorizationId, userId, permissionId)
  return axios.instance.post('/admin/authorization/changeAuthorization', {
    authorizationId: authorizationId,
    userId: userId,
    permissionId: permissionId
  })
}

function checkAddAuthorization(userId, permissionId) {
  return axios.instance.get('/admin/authorization/checkAddAuthorization', {
    params: {
      userId: userId,
      permissionId: permissionId
    }
  })
}

function checkChangeAuthorization(authorizationId, userId, permissionId) {
  return axios.instance.get('/admin/authorization/checkChangeAuthorization', {
    params: {
      authorizationId: authorizationId,
      userId: userId,
      permissionId: permissionId
    }
  })
}

// fileInfo

function removeFileInfo(fileId) {
  util.checkParameter('确认删除？', fileId)
  return axios.instance.post('/admin/fileInfo/removeFileInfo', {
    fileId: fileId,
    md5: null,
    fileLength: null,
    contentType: null,
    createTime: null
  })
}

function getFileInfo(fileId, md5) {
  return axios.instance.get('/admin/fileInfo/getFileInfo', {params: {fileId: fileId, md5: md5}})
}

function getFileInfoCountByQuery(query) {
  return getFileInfoCount(query.pageSize, query.page, query.fileId, query.md5, query.fileLength, query.contentType, query.createTime, query.updateTime)
}

function getFileInfoCount(pageSize, page, fileId, md5, fileLength, contentType, createTime, updateTime) {
  return axios.instance.get('/admin/fileInfo/getFileInfoCount', {
    params: {
      pageSize: pageSize,
      page: page,
      fileId: fileId,
      md5: md5,
      fileLength: fileLength,
      contentType: contentType,
      createTime: createTime,
      updateTime: updateTime
    }
  })
}

function listFileInfoByQuery(query) {
  return listFileInfo(query.pageSize, query.page, query.fileId, query.md5, query.fileLength, query.contentType, query.createTime, query.updateTime)
}

function listFileInfo(pageSize, page, fileId, md5, fileLength, contentType, createTime, updateTime) {
  return axios.instance.get('/admin/fileInfo/listFileInfo', {
    params: {
      pageSize: pageSize,
      page: page,
      fileId: fileId,
      md5: md5,
      fileLength: fileLength,
      contentType: contentType,
      createTime: createTime,
      updateTime: updateTime
    }
  })
}

function getFileInfoOwn(fileId, md5) {
  return axios.instance.get('/admin/fileInfo/getFileInfoOwn', {params: {fileId: fileId, md5: md5}})
}

function listFileInfoOwnByQuery(query) {
  return listFileInfoOwn(query.pageSize, query.page, query.fileId, query.md5, query.fileLength, query.contentType, query.createTime, query.updateTime)
}

function listFileInfoOwn(pageSize, page, fileId, md5, fileLength, contentType, createTime, updateTime) {
  return axios.instance.get('/admin/fileInfo/listFileInfoOwn', {
    params: {
      pageSize: pageSize,
      page: page,
      fileId: fileId,
      md5: md5,
      fileLength: fileLength,
      contentType: contentType,
      createTime: createTime,
      updateTime: updateTime
    }
  })
}

function listContentType() {
  return axios.instance.get('/admin/fileInfo/listContentType', {params: {}})
}

function checkAddFileInfo(md5, fileLength, contentType) {
  return axios.instance.get('/admin/fileInfo/checkAddFileInfo', {
    params: {
      md5: md5,
      fileLength: fileLength,
      contentType: contentType
    }
  })
}

function checkChangeFileInfo(fileId, md5, fileLength, contentType) {
  return axios.instance.get('/admin/fileInfo/checkChangeFileInfo', {
    params: {
      fileId: fileId,
      md5: md5,
      fileLength: fileLength,
      contentType: contentType
    }
  })
}

// own

function addOwn(userId, fileId, fileName, sort, description) {
  util.checkParameter('确认添加？', userId, fileId, fileName, sort)
  return axios.instance.post('/admin/own/addOwn', {
    userId: userId,
    fileId: fileId,
    fileName: fileName,
    sort: sort,
    description: description
  })
}

function removeOwn(ownId) {
  util.checkParameter('确认删除？', ownId)
  return axios.instance.post('/admin/own/removeOwn', {ownId: ownId})
}

function getOwn(ownId) {
  return axios.instance.get('/admin/own/getOwn', {params: {ownId: ownId}})
}

function getOwnCountByQuery(query) {
  return getOwnCount(query.pageSize, query.page, query.ownId, query.userId, query.fileId, query.fileName, query.sort, query.description, query.createTime, query.updateTime)
}

function getOwnCount(pageSize, page, ownId, userId, fileId, fileName, sort, description, createTime, updateTime) {
  return axios.instance.get('/admin/own/getOwnCount', {
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

function listOwnByQuery(query) {
  return listOwn(query.pageSize, query.page, query.ownId, query.userId, query.fileId, query.fileName, query.sort, query.description, query.createTime, query.updateTime)
}

function listOwn(pageSize, page, ownId, userId, fileId, fileName, sort, description, createTime, updateTime) {
  return axios.instance.get('/admin/own/listOwn', {
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
  return axios.instance.get('/admin/own/listSort', {params: {userId: userId}})
}

function changeOwn(ownId, userId, fileId, fileName, sort, description) {
  util.checkParameter('确认修改？', ownId, userId, fileId, fileName, sort)
  return axios.instance.post('/admin/own/changeOwn', {
    ownId: ownId,
    userId: userId,
    fileId: fileId,
    fileName: fileName,
    sort: sort,
    description: description
  })
}

function checkAddOwn(userId, fileId, fileName, sort, description) {
  return axios.instance.get('/admin/own/checkAddOwn', {
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
  return axios.instance.get('/admin/own/checkChangeOwn', {
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

// permission

function addPermission(permissionId, permissionName) {
  util.checkParameter('确认添加？', permissionId, permissionName)
  return axios.instance.post('/admin/permission/addPermission', {
    permissionId: permissionId,
    permissionName: permissionName
  })
}

function removePermission(permissionId) {
  util.checkParameter('确认删除？', permissionId)
  return axios.instance.post('/admin/permission/removePermission', {permissionId: permissionId})
}

function getPermission(permissionId) {
  return axios.instance.get('/admin/permission/getPermission', {params: {permissionId: permissionId}})
}

function listPermission() {
  return listPermissions(100, 1, 0, null, null, null)
}

function listPermissions(pageSize, page, permissionId, permissionName, createTime, updateTime) {
  return axios.instance.get('/admin/permission/listPermission', {
    params: {
      pageSize: pageSize,
      page: page,
      permissionId: permissionId,
      permissionName: permissionName,
      createTime: createTime,
      updateTime: updateTime
    }
  })
}

function getPermissionAuthorization(permissionId) {
  return axios.instance.get('/admin/permission/getPermissionAuthorization', {params: {permissionId: permissionId}})
}

function listPermissionAuthorizationByQuery(query) {
  return listPermissionAuthorization(query.pageSize, query.page, query.permissionId, query.permissionName, query.createTime, query.updateTime)
}

function listPermissionAuthorization(pageSize, page, permissionId, permissionName, createTime, updateTime) {
  return axios.instance.get('/admin/permission/listPermissionAuthorization', {
    params: {
      pageSize: pageSize,
      page: page,
      permissionId: permissionId,
      permissionName: permissionName,
      createTime: createTime,
      updateTime: updateTime
    }
  })
}

function changePermission(permissionId, permissionName) {
  util.checkParameter('确认修改？', permissionId, permissionName)
  return axios.instance.post('/admin/permission/changePermission', {
    permissionId: permissionId,
    permissionName: permissionName
  })
}

function checkAddPermission(permissionId, permissionName) {
  return axios.instance.get('/admin/permission/checkAddPermission', {
    params: {
      permissionId: permissionId,
      permissionName: permissionName
    }
  })
}

function checkChangePermission(permissionId, permissionName) {
  return axios.instance.get('/admin/permission/checkChangePermission', {
    params: {
      permissionId: permissionId,
      permissionName: permissionName
    }
  })
}

// user

function addUser(username, userPassword) {
  util.checkParameter('确认添加？', username, userPassword)
  return axios.instance.post('/admin/user/addUser', {username: username, userPassword: userPassword})
}

function removeUser(userId) {
  util.checkParameter('确认删除？', userId)
  return axios.instance.post('/admin/user/removeUser', {userId: userId})
}

function getUser(userId) {
  return axios.instance.get('/admin/user/getUser', {params: {userId: userId}})
}

function getUserCountByQuery(query) {
  return getUserCount(query.pageSize, query.page, query.userId, query.username, query.createTime, query.updateTime)
}

function getUserCount(pageSize, page, userId, username, createTime, updateTime) {
  return axios.instance.get('/admin/user/getUserCount', {
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

function listAllUser() {
  return axios.instance.get('/admin/user/listUser', {
    params: {
      pageSize: 100,
      page: 1
    }
  })
}

function listUserByQuery(query) {
  return listUser(query.pageSize, query.page, query.userId, query.username, query.createTime, query.updateTime)
}

function listUser(pageSize, page, userId, username, createTime, updateTime) {
  return axios.instance.get('/admin/user/listUser', {
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
  return axios.instance.get('/admin/user/getUserAuthorization', {params: {userId: userId}})
}

function listUserAuthorizationByQuery(query) {
  return listUserAuthorization(query.pageSize, query.page, query.userId, query.username, query.createTime, query.updateTime)
}

function listUserAuthorization(pageSize, page, userId, username, createTime, updateTime) {
  return axios.instance.get('/admin/user/listUserAuthorization', {
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
  return axios.instance.get('/admin/user/getUserOwn', {params: {userId: userId}})
}

function listUserOwnByQuery(query) {
  return listUserOwn(query.pageSize, query.page, query.userId, query.username, query.createTime, query.updateTime)
}

function listUserOwn(pageSize, page, userId, username, createTime, updateTime) {
  return axios.instance.get('/admin/user/listUserOwn', {
    pageSize: pageSize,
    page: page,
    userId: userId,
    username: username,
    createTime: createTime,
    updateTime: updateTime
  })
}

function changeUser(userId, username, userPassword) {
  util.checkParameter('确认修改？', userId, username, userPassword)
  return axios.instance.post('/admin/user/changeUser', {
    userId: userId,
    username: username,
    userPassword: userPassword
  })
}

function checkAddUser(username, userPassword) {
  return axios.instance.get('/admin/user/checkAddUser', {params: {username: username, userPassword: userPassword}})
}

function checkChangeUser(userId, username, userPassword) {
  return axios.instance.get('/admin/user/checkChangeUser', {
    params: {
      userId: userId,
      username: username,
      userPassword: userPassword
    }
  })
}

//task

function removeWaitTask(taskId) {
  util.checkParameter('确认删除？', taskId)
  return axios.instance.post('/admin/task/removeWaitTask', {taskId: taskId})
}

function getCurrentTask() {
  return axios.instance.get('/admin/task/getCurrentTask', {params: {}})
}

function listWaitTask() {
  return axios.instance.get('/admin/task/listWaitTask', {params: {}})
}

function getWaitTaskCount() {
  return axios.instance.get('/admin/task/getWaitTaskCount', {params: {}})
}

function removeTask(taskId) {
  util.checkParameter('确认删除？', taskId)
  return axios.instance.post('/admin/task/removeTask', {taskId: taskId})
}

function getTaskByQuery(query) {
  return getTask(query.taskId, query.userId, query.createTime, query.taskSort, query.status, query.massage, query.finishTime)
}

function getTask(taskId, userId, createTime, taskSort, status, massage, finishTime) {
  return axios.instance.get('/admin/task/getTask', {
    params: {
      taskId: taskId,
      userId: userId,
      createTime: createTime,
      taskSort: taskSort,
      status: status,
      massage: massage,
      finishTime: finishTime
    }
  })
}

function listTaskByQuery(query) {
  return listTask(query.taskId, query.userId, query.createTime, query.taskSort, query.status, query.massage, query.finishTime)
}

function listTask(taskId, userId, createTime, taskSort, status, massage, finishTime) {
  return axios.instance.get('/admin/task/listTask', {
    params: {
      taskId: taskId,
      userId: userId,
      createTime: createTime,
      taskSort: taskSort,
      status: status,
      massage: massage,
      finishTime: finishTime
    }
  })
}

function getTaskCountByQuery(query) {
  return getTaskCount(query.taskId, query.userId, query.createTime, query.taskSort, query.status, query.massage, query.finishTime)
}

function getTaskCount(taskId, userId, createTime, taskSort, status, massage, finishTime) {
  return axios.instance.get('/admin/task/getTaskCount', {
    params: {
      taskId: taskId,
      userId: userId,
      createTime: createTime,
      taskSort: taskSort,
      status: status,
      massage: massage,
      finishTime: finishTime
    }
  })
}

//file

function getDriveInfo() {
  return axios.instance.get('/admin/file/getDriveInfo', {params: {}})
}

function removeFile(fileId) {
  util.checkParameter('？？！！？？确认《删除》文件？？！！？？', fileId)
  return axios.instance.post('/admin/file/removeFile', {fileId: fileId})
}

function removeAllLocalFile() {
  util.checkParameter('确认删除全部文件从本地？')
  return axios.instance.post('/admin/file/removeAllLocalFile', {})
}

export default {
  clearExceptionInfo: clearExceptionInfo,
  getExceptionInfoCount: getExceptionInfoCount,
  listExceptionInfo: listExceptionInfo,
  addAuthorization: addAuthorization,
  removeAuthorization: removeAuthorization,
  getAuthorization: getAuthorization,
  getAuthorizationCount: getAuthorizationCount,
  listAuthorizationByQuery: listAuthorizationByQuery,
  listAuthorization: listAuthorization,
  changeAuthorization: changeAuthorization,
  checkAddAuthorization: checkAddAuthorization,
  checkChangeAuthorization: checkChangeAuthorization,
  removeFileInfo: removeFileInfo,
  getFileInfo: getFileInfo,
  getFileInfoCountByQuery: getFileInfoCountByQuery,
  getFileInfoCount: getFileInfoCount,
  listFileInfoByQuery: listFileInfoByQuery,
  listFileInfo: listFileInfo,
  getFileInfoOwn: getFileInfoOwn,
  listFileInfoOwnByQuery: listFileInfoOwnByQuery,
  listFileInfoOwn: listFileInfoOwn,
  listContentType: listContentType,
  checkAddFileInfo: checkAddFileInfo,
  checkChangeFileInfo: checkChangeFileInfo,
  addOwn: addOwn,
  removeOwn: removeOwn,
  getOwn: getOwn,
  getOwnCountByQuery: getOwnCountByQuery,
  getOwnCount: getOwnCount,
  listOwnByQuery: listOwnByQuery,
  listOwn: listOwn,
  listSort: listSort,
  changeOwn: changeOwn,
  checkAddOwn: checkAddOwn,
  checkChangeOwn: checkChangeOwn,
  addPermission: addPermission,
  removePermission: removePermission,
  getPermission: getPermission,
  listPermission: listPermission,
  getPermissionAuthorization: getPermissionAuthorization,
  listPermissionAuthorizationByQuery: listPermissionAuthorizationByQuery,
  listPermissionAuthorization: listPermissionAuthorization,
  changePermission: changePermission,
  checkAddPermission: checkAddPermission,
  checkChangePermission: checkChangePermission,
  addUser: addUser,
  removeUser: removeUser,
  getUser: getUser,
  getUserCountByQuery: getUserCountByQuery,
  getUserCount: getUserCount,
  listAllUser: listAllUser,
  listUserByQuery: listUserByQuery,
  listUser: listUser,
  getUserAuthorization: getUserAuthorization,
  listUserAuthorizationByQuery: listUserAuthorizationByQuery,
  listUserAuthorization: listUserAuthorization,
  getUserOwn: getUserOwn,
  listUserOwnByQuery: listUserOwnByQuery,
  listUserOwn: listUserOwn,
  changeUser: changeUser,
  checkAddUser: checkAddUser,
  checkChangeUser: checkChangeUser,
  removeWaitTask: removeWaitTask,
  getCurrentTask: getCurrentTask,
  listWaitTask: listWaitTask,
  getWaitTaskCount: getWaitTaskCount,
  removeTask: removeTask,
  getTaskByQuery: getTaskByQuery,
  getTask: getTask,
  listTaskByQuery: listTaskByQuery,
  listTask: listTask,
  getTaskCountByQuery: getTaskCountByQuery,
  getTaskCount: getTaskCount,
  getDriveInfo: getDriveInfo,
  removeFile: removeFile,
  removeAllLocalFile: removeAllLocalFile,
}
