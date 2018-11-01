import util from "./util";

const tokenKey = 'Authorization'
var token = null

function setToken(t) {
  token = t
  util.setCookie(tokenKey, token)
}

function getToken() {
  if (token == null) {
    token = util.getCookie(tokenKey)
  }
  return token
}

function getTokenFromCookieString(cookieString) {
  return util.getCookieFromString(cookieString, tokenKey)
}

function logined() {
  return getToken() != null && getToken() != '' && getToken() != 'null'
}

const accountKey = 'account'

function login(t, account) {
  if (t != null) {
    setToken(t)
  }
  if (account != null) {
    setAccount(account)
  }
}

function logout() {
  setToken(null)
  setAccount(null)
}

function getAccount() {
  let accountString = util.getCookie(accountKey)
  if (accountString != undefined && accountString != null && accountString.length > 0) {
    return JSON.parse(accountString)
  }
  return null
}

function setAccount(userVo) {
  util.setCookie(accountKey, JSON.stringify(userVo))
}

export default {
  tokenKey: tokenKey,
  setToken: setToken,
  getTokenFromCookieString: getTokenFromCookieString,
  getToken: getToken,
  logined: logined,
  login: login,
  logout: logout,
  getAccount: getAccount,
  setAccount: setAccount,
}
