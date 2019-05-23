'use strict'

let data = {
  url: 'https://www.softpedia.com/get/Internet/Chat/Instant-Messaging/WhatsApp.shtml',
  version: {
    selector: '.dllabel+span'
  },
  download: {
    plain: 'https://web.whatsapp.com/desktop/windows/release/x64/WhatsAppSetup.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install', 'full.nupkg', null, 'lib\\net45')
  }
}
module.exports = data
