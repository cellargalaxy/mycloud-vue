// 格式化时间戳
function formatTimestamp(timestamp, fmt) {
  return formatDate(new Date(timestamp), fmt)
}

// 日期对象格式化
function formatDate(date, fmt) {
  var o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    'S': date.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1)
        ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return fmt
}

// 文件大小格式化
function formatFileSize(bytes) {
  var i = Math.floor(Math.log(bytes) / Math.log(1024)),
    sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  return (bytes / Math.pow(1024, i)).toFixed(2) * 1 + ' ' + sizes[i]
}

// 读取cookie
function getCookie(name) {
  var nameEQ = name + '='
  var ca = document.cookie.split(';')
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i]
    while (c.charAt(0) == ' ') c = c.substring(1, c.length)
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length)
  }
  return null
}

function setCookie(key, value) {
  var date = new Date()
  date.setTime(date.getTime() + (1000 * 60 * 60 * 6))
  document.cookie = key + '=' + value + '; expires=' + date.toGMTString()
}

function successInfo(info) {
  alert(info)
}

function errorInfo(info) {
  alert(info)
}

function checkParameter(message, ...parameters) {
  parameters.forEach(function (parameter) {
    if (parameter == null || (isNaN(parameter) && parameter.length == 0) || parameter < 1) {
      errorInfo('非法参数:' + parameter)
      throw new Error('非法参数:' + parameter)
    }
  })
  if (message != null && !confirm(message)) {
    throw new Error()
  }
}

export default {
  formatTimestamp: formatTimestamp,
  formatDate: formatDate,
  formatFileSize: formatFileSize,
  getCookie: getCookie,
  setCookie: setCookie,
  successInfo: successInfo,
  errorInfo: errorInfo,
  checkParameter: checkParameter
}
