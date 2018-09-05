import axios from "../utils/axios";
import userFileInfoApi from "./userFileInfoApi";
import util from "../utils/util";

function getFileInfo(fileInfo) {
  if (!axios.logined()) {
    return axios.createEmtryAxios()
  }
  if (util.checkParameterOr(null, fileInfo, 'fileId', 'md5')) {
    return userFileInfoApi.getFileInfo(fileInfo.fileId, fileInfo.md5, 0, null, null)
  }
  return axios.createEmtryAxios()
}

export default {
  getFileInfo: getFileInfo,
}
