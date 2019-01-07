import guestOwnExpireApi from './guestOwnExpireApi'

function listRecentExpireOwn() {
  return guestOwnExpireApi.listRecentExpireOwn()
}

export default {
  listRecentExpireOwn: listRecentExpireOwn,
}

