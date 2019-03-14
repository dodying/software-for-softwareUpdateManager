'use strict'

let data = {
  useProxy: true,
  site: {
    Softpedia: 'https://www.softpedia.com/get/Network-Tools/Misc-Networking-Tools/Freegate.shtml'
  },
  install: function (output, iPath, fns) {
    return fns.install.single(output, iPath)
  }
}
module.exports = data
