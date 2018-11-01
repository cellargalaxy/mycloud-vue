import util from '../utils/util'

function isNumber(val) {
  return val != null && !isNaN(val)
}

function initOwn(own) {
  if (own == null) {
    return
  }
  if (isNumber(own.createTime)) {
    own.createTime = util.formatTimestamp(own.createTime, 'yyyy-MM-dd hh:mm:ss')
  }
  if (isNumber(own.updateTime)) {
    own.updateTime = util.formatTimestamp(own.updateTime, 'yyyy-MM-dd hh:mm:ss')
  }
  if (isNumber(own.fileLength)) {
    own.fileLength = util.formatFileSize(own.fileLength)
  }
  return own
}

function initFileInfo(fileInfo) {
  if (fileInfo == null) {
    return
  }
  if (isNumber(fileInfo.createTime)) {
    fileInfo.createTime = util.formatTimestamp(fileInfo.createTime, 'yyyy-MM-dd hh:mm:ss')
  }
  if (isNumber(fileInfo.updateTime)) {
    fileInfo.updateTime = util.formatTimestamp(fileInfo.updateTime, 'yyyy-MM-dd hh:mm:ss')
  }
  if (isNumber(fileInfo.fileLength)) {
    fileInfo.fileLength = util.formatFileSize(fileInfo.fileLength)
  }
  return fileInfo
}

function initUser(user) {
  if (user == null) {
    return
  }
  user.userPassword = null
  if (isNumber(user.createTime)) {
    user.createTime = util.formatTimestamp(user.createTime, 'yyyy-MM-dd hh:mm:ss')
  }
  if (isNumber(user.updateTime)) {
    user.updateTime = util.formatTimestamp(user.updateTime, 'yyyy-MM-dd hh:mm:ss')
  }
  return user
}

export default {
  initOwn: initOwn,
  initFileInfo: initFileInfo,
  initUser: initUser,
}
