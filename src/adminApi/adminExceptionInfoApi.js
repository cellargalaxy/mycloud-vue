import axios from '../utils/axios'

const url = '/admin/log'

function clearExceptionInfo() {
  return axios.instance.post(url + '/clearExceptionInfo', {})
}

function getExceptionInfoCount() {
  return axios.instance.get(url + '/getExceptionInfoCount', {params: {}})
}

function listExceptionInfo() {
  return axios.instance.get(url + '/listExceptionInfo', {params: {}})
}

export default {
  clearExceptionInfo: clearExceptionInfo,
  getExceptionInfoCount: getExceptionInfoCount,
  listExceptionInfo: listExceptionInfo,
}
