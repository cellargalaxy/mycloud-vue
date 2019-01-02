import userUserApi from './userUserApi'
import account from "../utils/account";
import util from "../utils/util";
import axios from "../utils/axios";

function changeUser(user) {
  if (!account.logined()) {
    util.errorInfo('请登录')
    return axios.createEmptyResponse()
  }
  if (util.checkParameterAnd('确认修改账号？', user, 'userId')) {
    return userUserApi.changeUser(user.userId, user.username, user.password)
  }
  return axios.createEmptyResponse()
}

export default {
  changeUser: changeUser,
}

