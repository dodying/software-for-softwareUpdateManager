'use strict'

let data = {
  commercial: 2,
  preferPath: 'UpdateStar.exe',
  site: {
    Softpedia: 'https://www.softpedia.com/get/System/System-Miscellaneous/UpdateStar.shtml'
  },
  install: function (output, iPath, fns) {
    return fns.install.msi(output, iPath, null, data.preferPath)
  }
}
module.exports = data
