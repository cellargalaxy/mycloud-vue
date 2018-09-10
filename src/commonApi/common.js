import util from '../utils/util'

function isNumber(val) {
  return val != null && !isNaN(val)
}

function initOwn(own) {
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

function initDriveInfo(driveInfo) {
  if (isNumber(driveInfo.useSpace)) {
    driveInfo.useSpace = util.formatFileSize(driveInfo.useSpace)
  }
  if (isNumber(driveInfo.freeSpace)) {
    driveInfo.freeSpace = util.formatFileSize(driveInfo.freeSpace)
  }
  if (isNumber(driveInfo.totalSpace)) {
    driveInfo.totalSpace = util.formatFileSize(driveInfo.totalSpace)
  }
  if (isNumber(driveInfo.usePhysicalMemorySize)) {
    driveInfo.usePhysicalMemorySize = util.formatFileSize(driveInfo.usePhysicalMemorySize)
  }
  if (isNumber(driveInfo.freePhysicalMemorySize)) {
    driveInfo.freePhysicalMemorySize = util.formatFileSize(driveInfo.freePhysicalMemorySize)
  }
  if (isNumber(driveInfo.totalPhysicalMemorySize)) {
    driveInfo.totalPhysicalMemorySize = util.formatFileSize(driveInfo.totalPhysicalMemorySize)
  }
  if (isNumber(driveInfo.freeSwapSpaceSize)) {
    driveInfo.freeSwapSpaceSize = util.formatFileSize(driveInfo.freeSwapSpaceSize)
  }
  if (isNumber(driveInfo.totalSwapSpaceSize)) {
    driveInfo.totalSwapSpaceSize = util.formatFileSize(driveInfo.totalSwapSpaceSize)
  }
  return driveInfo
}

function initTask(task) {
  if (isNumber(task.createTime)) {
    task.createTime = util.formatTimestamp(task.createTime, 'yyyy-MM-dd hh:mm:ss')
  }
  if (isNumber(task.finishTime)) {
    task.finishTime = util.formatTimestamp(task.finishTime, 'yyyy-MM-dd hh:mm:ss')
  }
  if (isNumber(task.status)) {
    task.status = getStatusName(task.status)
  }
  return task
}

function getStatusName(status) {
  if (status == 1) {
    return '等待'
  } else if (status == 2) {
    return '正在'
  } else if (status == 3) {
    return '取消'
  } else if (status == 4) {
    return '成功'
  } else if (status == 5) {
    return '失败'
  } else {
    return status
  }
}

function initExceptionInfo(exceptionInfo) {
  if (isNumber(exceptionInfo.date)) {
    exceptionInfo.date = util.formatTimestamp(exceptionInfo.date, 'yyyy-MM-dd hh:mm:ss')
  }
  return exceptionInfo
}

function initUserAuthorization(userAuthorizations) {
  userAuthorizations.authorizationForm = {userId: userAuthorizations.user.userId, permissionId: 0}

  for (let i = 0; i < userAuthorizations.authorizations.length; i++) {
    if (isNumber(userAuthorizations.authorizations[i].createTime)) {
      userAuthorizations.authorizations[i].createTime = util.formatTimestamp(userAuthorizations.authorizations[i].createTime, 'yyyy-MM-dd hh:mm:ss')
    }
    if (isNumber(userAuthorizations.authorizations[i].updateTime)) {
      userAuthorizations.authorizations[i].updateTime = util.formatTimestamp(userAuthorizations.authorizations[i].updateTime, 'yyyy-MM-dd hh:mm:ss')
    }
  }
  return userAuthorizations
}

function initUser(user) {
  user.userPassword = null
  if (isNumber(user.createTime)) {
    user.createTime = util.formatTimestamp(user.createTime, 'yyyy-MM-dd hh:mm:ss')
  }
  if (isNumber(user.updateTime)) {
    user.updateTime = util.formatTimestamp(user.updateTime, 'yyyy-MM-dd hh:mm:ss')
  }
  return user
}

function initPermission(permission) {
  if (isNumber(permission.createTime)) {
    permission.createTime = util.formatTimestamp(permission.createTime, 'yyyy-MM-dd hh:mm:ss')
  }
  if (isNumber(permission.updateTime)) {
    permission.updateTime = util.formatTimestamp(permission.updateTime, 'yyyy-MM-dd hh:mm:ss')
  }
  return permission
}

export default {
  initOwn: initOwn,
  initFileInfo: initFileInfo,
  initDriveInfo: initDriveInfo,
  initTask: initTask,
  initExceptionInfo: initExceptionInfo,
  initUserAuthorization: initUserAuthorization,
  initUser: initUser,
  initPermission: initPermission,
}
