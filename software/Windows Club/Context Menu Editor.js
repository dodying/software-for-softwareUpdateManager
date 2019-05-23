'use strict'

let data = {
  site: {
    Softpedia: 'https://www.softpedia.com/get/System/OS-Enhancements/Context-Menu-Editor-WindowsClub.shtml'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
