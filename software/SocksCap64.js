'use strict'

let data = {
  site: {
    Softpedia: 'https://www.softpedia.com/get/Security/Security-Related/SocksCap64.shtml'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install')
  }
}
module.exports = data
