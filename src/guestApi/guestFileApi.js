import axios from '../utils/axios'

const url = '/guest/file'

function uploadTmpFile(file, ownExpireTime) {
  const param = new FormData()
  param.append('file', file)
  param.append('ownExpireTime', ownExpireTime)
  return axios.fileAsyncAxiosMethod.post(url + '/uploadTmpFile', param)
}

export default {
  uploadTmpFile: uploadTmpFile,
}
