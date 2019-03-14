'use strict'

let data = {
  site: {
    Softpedia: 'https://www.softpedia.com/get/Internet/Chat/Instant-Messaging/WhatsApp.shtml'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install', 'full.nupkg', null, 'lib\\net45')
  }
}
module.exports = data
