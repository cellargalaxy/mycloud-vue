import axios from '../utils/axios'

const url = '/user/fileInfo'

function getFileInfo(fileId, md5, fileLength, contentType, createTime) {
  return axios.instance.get(url + '/getFileInfo', {
    params: {
      fileId: fileId,
      md5: md5,
      fileLength: fileLength,
      contentType: contentType,
      createTime: createTime
    }
  })
}

export default {
  getFileInfo: getFileInfo,
}
