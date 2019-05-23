'use strict'

let data = {
  site: {
    Softpedia: 'https://www.softpedia.com/get/Security/Security-Related/Hotspot-Shield.shtml'
  },
  preferPath: 'bin/hsscp.exe',
  install: function (output, iPath, fns) {
    return fns.install.wix(output, iPath, null, /^HSS/i, data.preferPath)
  }
}
module.exports = data
