'use strict'

let data = {
  site: {
    Softpedia: 'https://www.softpedia.com/get/Network-Tools/Misc-Networking-Tools/WiFi-Profile-Manager.shtml'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
