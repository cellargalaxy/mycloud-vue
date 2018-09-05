import axios from '../utils/axios'

const url = '/admin/task'

function removeWaitTask(taskId) {
  return axios.instance.post(url + '/removeWaitTask', {taskId: taskId})
}

function getCurrentTask() {
  return axios.instance.get(url + '/getCurrentTask', {params: {}})
}

function listWaitTask() {
  return axios.instance.get(url + '/listWaitTask', {params: {}})
}

function getWaitTaskCount() {
  return axios.instance.get(url + '/getWaitTaskCount', {params: {}})
}

function removeTask(taskId) {
  return axios.instance.post(url + '/removeTask', {taskId: taskId})
}

function getTask(taskId) {
  return axios.instance.get(url + '/getTask', {
    params: {
      taskId: taskId
    }
  })
}

function listTask(pageSize, page, taskId, userId, createTime, taskSort, status, massage, finishTime) {
  return axios.instance.get(url + '/listTask', {
    params: {
      pageSize: pageSize,
      page: page,
      taskId: taskId,
      userId: userId,
      createTime: createTime,
      taskSort: taskSort,
      status: status,
      massage: massage,
      finishTime: finishTime
    }
  })
}

function getTaskCount(pageSize, page, taskId, userId, createTime, taskSort, status, massage, finishTime) {
  return axios.instance.get(url + '/getTaskCount', {
    params: {
      pageSize: pageSize,
      page: page,
      taskId: taskId,
      userId: userId,
      createTime: createTime,
      taskSort: taskSort,
      status: status,
      massage: massage,
      finishTime: finishTime
    }
  })
}

export default {
  removeWaitTask: removeWaitTask,
  getCurrentTask: getCurrentTask,
  listWaitTask: listWaitTask,
  getWaitTaskCount: getWaitTaskCount,
  removeTask: removeTask,
  getTask: getTask,
  listTask: listTask,
  getTaskCount: getTaskCount,
}
