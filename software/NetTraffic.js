'use strict'

let data = {
  site: {
    Softpedia: 'https://www.softpedia.com/get/Network-Tools/Network-Monitoring/NetTraffic-Venea.shtml'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install')
  }
}
module.exports = data
