import userFileInfoApi from "./userFileInfoApi";
import account from "../utils/account";
import util from "../utils/util";
import axios from "../utils/axios";

function getFileInfo(fileInfo) {
  if (!account.logined()) {
    util.errorInfo('请登录')
    return axios.createEmptyResponse()
  }
  return userFileInfoApi.getFileInfo(fileInfo.md5)
}

export default {
  getFileInfo: getFileInfo,
}
