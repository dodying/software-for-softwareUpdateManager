'use strict'

let data = {
  commercial: 2,
  url: 'https://www.softpedia.com/get/Internet/Chat/Instant-Messaging/Typetalk.shtml',
  version: {
    selector: '.dllabel+span'
  },
  download: {
    plain: 'https://www.typetalk.com/downloads/desktop/win/latest/TypetalkSetup.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install', 'full.nupkg', null, 'lib\\net45')
  }
}
module.exports = data
