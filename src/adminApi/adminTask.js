import axios from '../utils/axios'
import adminTaskApi from './adminTaskApi'
import util from "../utils/util";

function removeWaitTask(task) {
  if (!axios.logined()) {
    return axios.createEmtryAxios()
  }
  if (util.checkParameterAnd('确认删除任务？', task, 'taskId')) {
    return adminTaskApi.removeWaitTask(task.taskId)
  }
  return axios.createEmtryAxios()
}

function getCurrentTask() {
  if (!axios.logined()) {
    return axios.createEmtryAxios()
  }
  return adminTaskApi.getCurrentTask()
}

function listWaitTask() {
  if (!axios.logined()) {
    return axios.createEmtryAxios()
  }
  return adminTaskApi.listWaitTask()
}

function getWaitTaskCount() {
  if (!axios.logined()) {
    return axios.createEmtryAxios()
  }
  return adminTaskApi.getWaitTaskCount()
}

function removeTask(task) {
  if (!axios.logined()) {
    return axios.createEmtryAxios()
  }
  if (util.checkParameterAnd('确认删除任务？', task, 'taskId')) {
    return adminTaskApi.removeTask(task.taskId)
  }
  return axios.createEmtryAxios()
}

function createTaskQuery() {
  return {pageSize: 20, page: 1, taskId: 0, userId: 0, taskSort: null, status: 0}
}

function listTask(taskQuery) {
  if (!axios.logined()) {
    return axios.createEmtryAxios()
  }
  if (util.checkQueryParameter(taskQuery)) {
    return adminTaskApi.listTask(taskQuery.pageSize, taskQuery.page, taskQuery.taskId, taskQuery.userId, null, taskQuery.taskSort, taskQuery.status, null, null)
  }
  return axios.createEmtryAxios()
}

function getTaskCount(taskQuery) {
  if (!axios.logined()) {
    return axios.createEmtryAxios()
  }
  if (util.checkQueryParameter(taskQuery)) {
    return adminTaskApi.getTaskCount(taskQuery.pageSize, taskQuery.page, taskQuery.taskId, taskQuery.userId, null, taskQuery.taskSort, taskQuery.status, null, null)
  }
  return axios.createEmtryAxios()
}

export default {
  removeWaitTask: removeWaitTask,
  getCurrentTask: getCurrentTask,
  listWaitTask: listWaitTask,
  getWaitTaskCount: getWaitTaskCount,
  removeTask: removeTask,
  createTaskQuery: createTaskQuery,
  listTask: listTask,
  getTaskCount: getTaskCount,
}
