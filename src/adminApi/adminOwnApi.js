import axios from '../utils/axios'

const url = '/admin/own'

function addOwn(userId, fileId, fileLength, contentType, fileName, sort, description) {
  return axios.tokenAxiosMethod.post(url + '/addOwn', {
    userId: userId,
    fileId: fileId,
    fileLength: fileLength,
    contentType: contentType,
    fileName: fileName,
    sort: sort,
    description: description
  })
}

function removeOwn(ownId, ownUuid) {
  return axios.tokenAxiosMethod.post(url + '/removeOwn', {
    ownId: ownId,
    ownUuid: ownUuid,
  })
}

function changeOwn(ownId, ownUuid, userId, fileId, fileLength, contentType, fileName, sort, description) {
  return axios.tokenAxiosMethod.post(url + '/changeOwn', {
    ownId: ownId,
    ownUuid: ownUuid,
    userId: userId,
    fileId: fileId,
    fileLength: fileLength,
    contentType: contentType,
    fileName: fileName,
    sort: sort,
    description: description
  })
}

function getOwn(ownId, ownUuid) {
  return axios.tokenAxiosMethod.get(url + '/getOwn', {ownId: ownId, ownUuid: ownUuid})
}

function listOwn(pageSize, page, ownId, ownUuid, userId, fileId, contentType, fileName, sort) {
  return axios.tokenAxiosMethod.get(url + '/listOwn', {
    params: {
      pageSize: pageSize,
      page: page,
      ownId: ownId,
      ownUuid: ownUuid,
      userId: userId,
      fileId: fileId,
      contentType:contentType,
      fileName: fileName,
      sort: sort,
    }
  })
}

function getOwnCount(pageSize, page, ownId, ownUuid, userId, fileId, contentType, fileName, sort) {
  return axios.tokenAxiosMethod.get(url + '/getOwnCount', {
    params: {
      pageSize: pageSize,
      page: page,
      ownId: ownId,
      ownUuid: ownUuid,
      userId: userId,
      fileId: fileId,
      contentType:contentType,
      fileName: fileName,
      sort: sort,
    }
  })
}

function listSort() {
  return axios.tokenAxiosMethod.get(url + '/listSort', {})
}

export default {
  addOwn: addOwn,
  removeOwn: removeOwn,
  getOwn: getOwn,
  getOwnCount: getOwnCount,
  listOwn: listOwn,
  listSort: listSort,
  changeOwn: changeOwn,
}
