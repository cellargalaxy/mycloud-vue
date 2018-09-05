import axios from '../utils/axios'

const url = '/admin/fileInfo'

function removeFileInfo(fileId) {
  return axios.instance.post(url + '/removeFileInfo', {
    fileId: fileId,
    md5: null,
    fileLength: null,
    contentType: null,
    createTime: null
  })
}

function getFileInfo(fileId, md5) {
  return axios.instance.get(url + '/getFileInfo', {params: {fileId: fileId, md5: md5}})
}

function getFileInfoCount(pageSize, page, fileId, md5, fileLength, contentType, createTime, updateTime) {
  return axios.instance.get(url + '/getFileInfoCount', {
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

function listFileInfo(pageSize, page, fileId, md5, fileLength, contentType, createTime, updateTime) {
  return axios.instance.get(url + '/listFileInfo', {
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
  return axios.instance.get(url + '/getFileInfoOwn', {params: {fileId: fileId, md5: md5}})
}

function listFileInfoOwn(pageSize, page, fileId, md5, fileLength, contentType, createTime, updateTime) {
  return axios.instance.get(url + '/listFileInfoOwn', {
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
  return axios.instance.get(url + '/listContentType', {params: {}})
}

function checkAddFileInfo(md5, fileLength, contentType) {
  return axios.instance.get(url + '/checkAddFileInfo', {
    params: {
      md5: md5,
      fileLength: fileLength,
      contentType: contentType
    }
  })
}

function checkChangeFileInfo(fileId, md5, fileLength, contentType) {
  return axios.instance.get(url + '/checkChangeFileInfo', {
    params: {
      fileId: fileId,
      md5: md5,
      fileLength: fileLength,
      contentType: contentType
    }
  })
}

export default {
  removeFileInfo: removeFileInfo,
  getFileInfo: getFileInfo,
  getFileInfoCount: getFileInfoCount,
  listFileInfo: listFileInfo,
  getFileInfoOwn: getFileInfoOwn,
  listFileInfoOwn: listFileInfoOwn,
  listContentType: listContentType,
  checkAddFileInfo: checkAddFileInfo,
  checkChangeFileInfo: checkChangeFileInfo,
}
