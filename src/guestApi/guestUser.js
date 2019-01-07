import guestUserApi from './guestUserApi'

function getUserVo() {
  return guestUserApi.getUserVo()
}

function getGuestToken() {
  return guestUserApi.getGuestToken()
}

export default {
  getUserVo: getUserVo,
  getGuestToken: getGuestToken,
}

