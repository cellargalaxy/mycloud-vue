import axios from '../utils/axios'

const url = '/user/file'

function uploadFile(files, sort, description) {
  const param = new FormData()
  for (let i = 0; i < files.length; i++) {
    param.append('files', files[i])
  }
  param.append('sort', sort)
  param.append('description', description)
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': axios.getToken()
    }
  }
  return axios.baseAxios.post(axios.baseURL + url + '/uploadFile', param, config)
}

export default {
  uploadFile: uploadFile,
}
