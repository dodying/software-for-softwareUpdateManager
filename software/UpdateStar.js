'use strict'

let data = {
  commercial: 2,
  preferPath: 'UpdateStar.exe',
  site: {
    Softpedia: 'https://www.softpedia.com/get/System/System-Miscellaneous/UpdateStar.shtml'
  },
  install: function (output, iPath) {
    return require('./../js/install_msi')(output, iPath, null, data.preferPath)
  }
}
module.exports = data
