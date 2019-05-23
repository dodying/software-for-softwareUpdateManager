'use strict'

let data = {
  site: {
    Softpedia: 'https://www.softpedia.com/get/IPOD-TOOLS/Multimedia-IPOD-tools/iRenew.shtml'
  },
  preferPath: 'iRenew.exe',
  install: function (output, iPath, fns) {
    return fns.install.msi(output, iPath, null, data.preferPath)
  }
}
module.exports = data
