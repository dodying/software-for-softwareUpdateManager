'use strict'

let data = {
  commercial: 3,
  site: {
    Softpedia: 'https://www.softpedia.com/get/System/System-Miscellaneous/Paragon-ExtFS.shtml'
  },
  preferPath: 'Linux File Systems for Windows by Paragon Software.exe',
  install: function (output, iPath, fns) {
    return fns.install.msi(output, iPath, null, data.preferPath)
  }
}
module.exports = data
