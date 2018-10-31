import axios from '../utils/axios'

const url = '/admin/fileInfo'

function getFileInfo(fileId, md5) {
  return axios.tokenAxiosMethod.get(url + '/getFileInfo', {fileId: fileId, md5: md5})
}

function getFileInfoVo(fileId, md5) {
  return axios.tokenAxiosMethod.get(url + '/getFileInfoVo', {fileId: fileId, md5: md5})
}

function listFileInfo(pageSize, page, fileId, md5, contentType) {
  return axios.tokenAxiosMethod.get(url + '/listFileInfo', {
    pageSize: pageSize,
    page: page,
    fileId: fileId,
    md5: md5,
    contentType: contentType,
  })
}

function listFileInfoVo(pageSize, page, fileId, md5, contentType) {
  return axios.tokenAxiosMethod.get(url + '/listFileInfoVo', {
    pageSize: pageSize,
    page: page,
    fileId: fileId,
    md5: md5,
    contentType: contentType,
  })
}

function getFileInfoCount(pageSize, page, fileId, md5, contentType) {
  return axios.tokenAxiosMethod.get(url + '/getFileInfoCount', {
    pageSize: pageSize,
    page: page,
    fileId: fileId,
    md5: md5,
    contentType: contentType,
  })
}

function listContentType() {
  return axios.tokenAxiosMethod.get(url + '/listContentType', {})
}

export default {
  getFileInfo: getFileInfo,
  getFileInfoVo: getFileInfoVo,
  listFileInfo: listFileInfo,
  listFileInfoVo: listFileInfoVo,
  getFileInfoCount: getFileInfoCount,
  listContentType: listContentType,
}
