import adminExceptionInfoApi from './adminExceptionInfoApi'
import axios from "../utils/axios";
import util from "../utils/util";

function clearExceptionInfo() {
  if (!axios.logined()) {
    return axios.createEmtryAxios()
  }
  return adminExceptionInfoApi.clearExceptionInfo()
}

function getExceptionInfoCount() {
  if (!axios.logined()) {
    return axios.createEmtryAxios()
  }
  return adminExceptionInfoApi.getExceptionInfoCount()
}

function listExceptionInfo() {
  if (!axios.logined()) {
    return axios.createEmtryAxios()
  }
  return adminExceptionInfoApi.listExceptionInfo()
}

export default {
  clearExceptionInfo: clearExceptionInfo,
  getExceptionInfoCount: getExceptionInfoCount,
  listExceptionInfo: listExceptionInfo,
}
