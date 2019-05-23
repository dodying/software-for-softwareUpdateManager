'use strict'

let data = {
  site: {
    Softpedia: 'https://www.softpedia.com/get/Network-Tools/Bandwidth-Tools/NetSpeedMonitor.shtml'
  },
  preferPath: 'nsmc.exe',
  install: function (output, iPath, fns) {
    return fns.install.msi(output, iPath, null, data.preferPath)
  }
}
module.exports = data
