import axios from 'axios'
import qs from 'qs'
import util from './util'
import account from './account'

const baseURL = 'http://api.mycloud.cellargalaxy.top'
// const baseURL = 'http://127.0.0.1:8080'
const timeout = 1000 * 10

const tokenAxios = axios.create({
  baseURL: baseURL,
  timeout: timeout
})
tokenAxios.interceptors.request.use(
  config => {
    config.data = qs.stringify(config.data)
    config.headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': account.getToken()
    }
    return config
  }
)

const fileAxios = axios.create({
  baseURL: baseURL,
  timeout: 1000 * 60 * 60
})
fileAxios.interceptors.request.use(
  config => {
    config.headers = {
      'Content-Type': 'multipart/form-data',
      'Authorization': account.getToken()
    }
    return config
  }
)

const tokenAxiosMethod = createMethod(tokenAxios)
const fileAxiosMethod = createMethod(fileAxios)

function createMethod(axios) {
  axios.interceptors.request.use(
    (config) => {
      return config
    },
    (error) => {
      util.errorInfo('网络异常:' + error)
      return Promise.reject(error)
    }
  )
  axios.interceptors.response.use(
    (response) => {
      if (response.data.status != 1) {
        util.errorInfo(response.data.massage)
        return createEmptyResponseWithMassage(response.data.massage)
      }
      return response.data
    },
    (error) => {
      util.errorInfo('网络异常:' + error)
      return Promise.reject(error)
    }
  )

  return {
    get(url, data) {
      return axios.get(url, {params: data})
    },
    post(url, data) {
      return axios.post(url, data)
    },
  }
}

function createAsyncMethod(axios) {
  return {
    async get(url, data) {
      let res = await axios.get(url, {params: data})
      if (res.data.status != 1) {
        util.errorInfo(res.data.massage)
        return createEmptyResponseWithMassage(response.data.massage)
      }
      return inspect(res.data)
    },
    async post(url, data) {
      let res = await axios.post(url, data)
      if (res.data.status != 1) {
        util.errorInfo(res.data.massage)
        return createEmptyResponseWithMassage(response.data.massage)
      }
      return inspect(res.data)
    },
  }
}

function createEmptyResponseWithMassage(massage) {
  return inspect({status: 0, massage: massage, data: null})
}

function createEmptyResponse() {
  return createEmptyResponseWithMassage('请登录')
}

function inspect(data) {
  return new Promise((resolve, reject) => {
    if (data.status === 1) {
      resolve(data.data)
    } else {
      reject(data.massage)
    }
  })
}

export default {
  fileAxiosMethod: fileAxiosMethod,
  tokenAxiosMethod: tokenAxiosMethod,
  createEmptyResponseWithMassage: createEmptyResponseWithMassage,
  createEmptyResponse: createEmptyResponse,
}

//////////////////////

const baseAxios = axios.create({
  baseURL: baseURL,
  timeout: timeout
})

////////////////

const inspectAxios = axios.create({
  baseURL: baseURL,
  timeout: 5000
})
inspectAxios.interceptors.request.use(
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
inspectAxios.interceptors.response.use(
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
