import axios from '../utils/axios'

const url = '/user/file'


function uploadFile(file, sort, description) {
  const param = new FormData()
  param.append('file', file)
  param.append('sort', sort)
  param.append('description', description)
  return axios.fileAxiosMethod.post(url + '/uploadFile', param)
}

function submitUrl(urlString, sort, description) {
  return axios.tokenAxiosMethod.post(url + '/submitUrl', {url: urlString, sort: sort, description: description})
}

function downloadTar() {
  return axios.tokenAxiosMethod.get(url + '/downloadTar', {})
}

export default {
  uploadFile: uploadFile,
  submitUrl: submitUrl,
  downloadTar: downloadTar,
}
