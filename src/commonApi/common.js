import util from '../utils/util'

function initOwn(own) {
  if (own.createTime != null && !isNaN(own.createTime)) {
    own.createTime = util.formatTimestamp(own.createTime, 'yyyy-MM-dd hh:mm:ss')
  }
  if (own.updateTime != null && !isNaN(own.updateTime)) {
    own.updateTime = util.formatTimestamp(own.updateTime, 'yyyy-MM-dd hh:mm:ss')
  }
  if (own.fileLength != null && !isNaN(own.fileLength)) {
    own.fileLength = util.formatFileSize(own.fileLength)
  }
  return own
}


export default {
  initOwn: initOwn,
}
