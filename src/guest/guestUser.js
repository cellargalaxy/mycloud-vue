import guestUserApi from './guestUserApi'

function getUserVo() {
  return guestUserApi.getUserVo()
}

export default {
  getUserVo: getUserVo,
}

