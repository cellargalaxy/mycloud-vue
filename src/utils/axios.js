import axios from 'axios'
import qs from 'qs'
import util from './util'
import publicApi from './public-api'

var baseURL = 'http://api.mycloud.cellargalaxy.top:8080'

var baseAxios = axios.create({
  baseURL: baseURL,
  timeout: 5000
})

var simpleAxios = axios.create({
  baseURL: baseURL,
  timeout: 5000
})
simpleAxios.interceptors.request.use(
  config => {
    config.data = qs.stringify(config.data)
    config.headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': publicApi.getToken()
    }
    return config
  }
)

var instance = axios.create({
  baseURL: baseURL,
  timeout: 5000
})
instance.interceptors.request.use(
  config => {
    config.data = qs.stringify(config.data)
    config.headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': publicApi.getToken()
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

export default {
  baseAxios: baseAxios,
  simpleAxios: simpleAxios,
  instance: instance,
  baseURL: baseURL,
}
