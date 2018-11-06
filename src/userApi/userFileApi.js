import axios from '../utils/axios'
import account from '../utils/account'

const url = '/user/file'


function uploadFile(file, sort, description) {
  const param = new FormData()
  param.append('file', file)
  param.append('sort', sort)
  param.append('description', description)
  return axios.fileAsyncAxiosMethod.post(url + '/uploadFile', param)
}

function submitUrl(urlString, sort, description) {
  return axios.tokenAsyncAxiosMethod.post(url + '/submitUrl', {url: urlString, sort: sort, description: description})
}

function downloadTar() {
  let parameter = {}
  parameter[account.tokenKey] = account.getToken()
  return axios.tokenAsyncAxiosMethod.get(url + '/downloadTar', parameter)
}

export default {
  uploadFile: uploadFile,
  submitUrl: submitUrl,
  downloadTar: downloadTar,
}
