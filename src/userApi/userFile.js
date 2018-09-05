import userFileApi from './userFileApi'
import axios from "../utils/axios";
import util from "../utils/util";

function uploadFile(files, sort, description) {
  if (!axios.logined()) {
    return axios.createEmtryAxios()
  }
  if (files == null || files.length == 0) {
    util.errorInfo('未选择文件')
    return axios.createEmtryAxios()
  }
  if (sort == null || sort == '') {
    util.errorInfo('分类不能为空')
    return axios.createEmtryAxios()
  }
  return userFileApi.uploadFile(files, sort, description)
}

export default {
  uploadFile: uploadFile,
}
