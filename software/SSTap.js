'use strict'

let data = {
  site: {
    Softpedia: 'https://www.softpedia.com/get/Internet/Secure-Browsing-VPN/SSTap.shtml'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data