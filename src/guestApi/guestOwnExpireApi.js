import axios from '../utils/axios'

const url = '/guest/ownExpire'

function listRecentExpireOwn() {
  return axios.tokenAxiosMethod.get(url + '/listRecentExpireOwn', {})
}

export default {
  listRecentExpireOwn: listRecentExpireOwn,
}
