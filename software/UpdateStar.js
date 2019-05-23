'use strict'

let data = {
  commercial: 2,
  preferPath: 'UpdateStar.exe',
  url: 'https://www.softpedia.com/get/System/System-Miscellaneous/UpdateStar.shtml',
  version: {
    selector: '.dllabel+span'
  },
  download: {
    plain: 'http://static.updatestar.net/dl/updatestar/updatestar/UpdateStar_ENU.msi'
  },
  install: function (output, iPath, fns) {
    return fns.install.msi(output, iPath, null, data.preferPath)
  }
}
module.exports = data
