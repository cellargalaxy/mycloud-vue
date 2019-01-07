import util from '../utils/util'

function initOwnExpire(ownExpire) {
  if (ownExpire == null) {
    return
  }
  if (util.isNumber(ownExpire.ownExpireTime)) {
    ownExpire.ownExpireTime = util.formatTimestamp(ownExpire.ownExpireTime, 'MM-dd hh:mm')
  }
  if (util.isNumber(ownExpire.createTime)) {
    ownExpire.createTime = util.formatTimestamp(ownExpire.createTime, 'yyyy-MM-dd hh:mm:ss')
  }
  if (util.isNumber(ownExpire.updateTime)) {
    ownExpire.updateTime = util.formatTimestamp(ownExpire.updateTime, 'yyyy-MM-dd hh:mm:ss')
  }
  if (util.isNumber(ownExpire.fileLength)) {
    ownExpire.fileLength = util.formatFileSize(ownExpire.fileLength)
  }
  return ownExpire
}

function initOwn(own) {
  if (own == null) {
    return
  }
  if (util.isNumber(own.createTime)) {
    own.createTime = util.formatTimestamp(own.createTime, 'yyyy-MM-dd hh:mm:ss')
  }
  if (util.isNumber(own.updateTime)) {
    own.updateTime = util.formatTimestamp(own.updateTime, 'yyyy-MM-dd hh:mm:ss')
  }
  if (util.isNumber(own.fileLength)) {
    own.fileLength = util.formatFileSize(own.fileLength)
  }
  return own
}

function initFileInfo(fileInfo) {
  if (fileInfo == null) {
    return
  }
  if (util.isNumber(fileInfo.createTime)) {
    fileInfo.createTime = util.formatTimestamp(fileInfo.createTime, 'yyyy-MM-dd hh:mm:ss')
  }
  if (util.isNumber(fileInfo.updateTime)) {
    fileInfo.updateTime = util.formatTimestamp(fileInfo.updateTime, 'yyyy-MM-dd hh:mm:ss')
  }
  if (util.isNumber(fileInfo.fileLength)) {
    fileInfo.fileLength = util.formatFileSize(fileInfo.fileLength)
  }
  return fileInfo
}

function initUser(user) {
  if (user == null) {
    return
  }
  user.userPassword = null
  if (util.isNumber(user.createTime)) {
    user.createTime = util.formatTimestamp(user.createTime, 'yyyy-MM-dd hh:mm:ss')
  }
  if (util.isNumber(user.updateTime)) {
    user.updateTime = util.formatTimestamp(user.updateTime, 'yyyy-MM-dd hh:mm:ss')
  }
  return user
}

export default {
  initOwnExpire: initOwnExpire,
  initOwn: initOwn,
  initFileInfo: initFileInfo,
  initUser: initUser,
}
