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
  var newFiles = files
  // for (let i = 0; i < files.length; i++) {
  //   userFileInfo.getFileInfo({md5: null})
  //     .then(res => {
  //       var fileInfo = res.data.data
  //       if (fileInfo == null) {
  //         newFiles.push(files[i])
  //       } else {
  //         userOwn.addOwn({fileId: fileInfo.fileId, fileName: files[i].fileName, sort: sort, description: description})
  //       }
  //     })
  // }
  // if (newFiles.length == 0) {
  //   util.errorInfo('上传成功')
  //   return axios.createEmtryAxios()
  // }
  return userFileApi.uploadFile(newFiles, sort, description)
}

export default {
  uploadFile: uploadFile,
}
