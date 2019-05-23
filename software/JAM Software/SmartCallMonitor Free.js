'use strict'

let data = {
  url: 'https://www.jam-software.com/smartcallmonitor_free/',
  version: {
    selector: '.uppercase'
  },
  download: {
    plain: 'https://www.jam-software.com/smartcallmonitor_free/SmartCallMonitor-Free-Setup.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno.type(output, iPath, null, '1')
  }
}
module.exports = data
