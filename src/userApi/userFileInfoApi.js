import axios from '../utils/axios'

const url = '/user/fileInfo'

function getFileInfo(md5) {
  return axios.tokenAxiosMethod.get(url + '/getFileInfo', {md5: md5})
}

export default {
  getFileInfo: getFileInfo,
}
