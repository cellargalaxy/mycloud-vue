import axios from './axios'

//fileInfo
function getFileInfoByMd5(md5) {
  return getFileInfo(0, md5, 0, null, null);
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
  });
}

//file

function uploadFile(files, sort, description) {
  let param = new FormData();
  for (let i = 0; i < files.length; i++) {
    param.append('files', files[i]);
  }
  param.append('sort', sort);
  param.append('description', description);
  let config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': axios.getToken(),
    }
  };
  return axios.baseAxios.post(axios.baseURL + '/user/file/uploadFile', param, config);
}

//own

function addOwn(fileId, fileName, sort, description) {
  return axios.instance.post('/user/own/addOwn', {
    fileId: fileId,
    fileName: fileName,
    sort: sort,
    description: description
  });
}

function removeOwnByFileId(fileId) {
  return removeOwn(fileId, null, null, null, null, null);
}

function removeOwn(fileId, fileName, sort, description, createTime, updateTime) {
  return axios.instance.post('/user/own/removeOwn', {
    fileId: fileId,
    fileName: fileName,
    sort: sort,
    description: description,
    createTime: createTime,
    updateTime: updateTime
  });
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
  });
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
  });
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
  });
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
  });
}

function changeOwn(ownId, userId, fileId, fileName, sort, description) {
  console.log('ownId: ' + ownId)
  return axios.instance.post('/user/own/changeOwn', {
    ownId: ownId,
    userId: userId,
    fileId: fileId,
    fileName: fileName,
    sort: sort,
    description: description
  });
}

function checkAddOwn(fileId, fileName, sort, description) {
  return axios.instance.get('/user/own/checkAddOwn', {
    params: {
      fileId: fileId,
      fileName: fileName,
      sort: sort,
      description: description
    }
  });
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

  });
}

//user

function getUser(userId, username, createTime, updateTime) {
  return axios.instance.get('/user/user/getUser', {
    params: {
      userId: userId,
      username: username,
      createTime: createTime,
      updateTime: updateTime
    }
  });
}

function getUserAuthorization(userId, username, createTime, updateTime) {
  return axios.instance.get('/user/user/getUserAuthorization', {
    params: {
      userId: userId,
      username: username,
      createTime: createTime,
      updateTime: updateTime
    }
  });
}

function changeUser(userId, username, userPassword) {
  return axios.instance.post('/user/user/changeUser', {
    userId: userId,
    username: username,
    userPassword: userPassword,
  });
}

function checkChangeUser(userId, username, userPassword) {
  return axios.instance.get('/user/user/checkChangeUser', {
    params: {
      userId: userId,
      username: username,
      userPassword: userPassword,
    }
  });
}

export default {
  getFileInfoByMd5: getFileInfoByMd5,
  getFileInfo: getFileInfo,
  uploadFile: uploadFile,
  addOwn: addOwn,
  removeOwnByFileId: removeOwnByFileId,
  removeOwn: removeOwn,
  getOwn: getOwn,
  getOwnCount: getOwnCount,
  listOwn: listOwn,
  listSort: listSort,
  changeOwn: changeOwn,
  checkAddOwn: checkAddOwn,
  checkChangeOwn: checkChangeOwn,
  getUser: getUser,
  getUserAuthorization: getUserAuthorization,
  changeUser: changeUser,
  checkChangeUser: checkChangeUser,
}
