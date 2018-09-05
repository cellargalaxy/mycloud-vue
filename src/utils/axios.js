import axios from 'axios'
import qs from 'qs'
import util from './util'

const baseURL = 'http://api.mycloud.cellargalaxy.top'

const baseAxios = axios.create({
  baseURL: baseURL,
  timeout: 1000 * 60 * 60
})

const simpleAxios = axios.create({
  baseURL: baseURL,
  timeout: 5000
})
simpleAxios.interceptors.request.use(
  config => {
    config.data = qs.stringify(config.data)
    config.headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': getToken()
    }
    return config
  }
)

const instance = axios.create({
  baseURL: baseURL,
  timeout: 5000
})
instance.interceptors.request.use(
  config => {
    config.data = qs.stringify(config.data)
    config.headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': getToken()
    }
    return config
  },
  error => {
    console.log(error)
    util.errorInfo('网络异常:' + error)
    return Promise.reject(error)
  }
)
instance.interceptors.response.use(
  response => {
    if (response.data.status != 1) {
      util.errorInfo(response.data.massage)
      throw new Error(response.data.massage)
    }
    return response
  },
  error => {
    console.log(error)
    util.errorInfo('网络异常:' + error)
    return Promise.reject(error)
  }
)

var token = null

function setToken(t) {
  token = t
  util.setCookie('Authorization', t)
}

function getToken() {
  if (token == null) {
    token = util.getCookie('Authorization')
  }
  return token
}

function logined() {
  return getToken() != null && getToken() != 'null'
}

function createEmtryAxios() {
  return {
    then: function () {
    }, catch: function () {
    }
  }
}

export default {
  baseAxios: baseAxios,
  simpleAxios: simpleAxios,
  instance: instance,
  baseURL: baseURL,
  setToken: setToken,
  getToken: getToken,
  createEmtryAxios: createEmtryAxios,
  logined: logined,
}
