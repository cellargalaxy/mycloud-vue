import util from '../utils/util'
import guestFileApi from './guestFileApi'

function uploadTmpFile(uploadTmpFileForm) {
  if (util.checkParameterAnd(null, uploadTmpFileForm, 'file', 'ownExpireTime')) {
    return guestFileApi.uploadTmpFile(uploadTmpFileForm.file, uploadTmpFileForm.ownExpireTime)
  }
}


export default {
  uploadTmpFile: uploadTmpFile,
}
