'use strict'

let data = {
  commercial: 3,
  url: 'https://www.jam-software.com/smartcallmonitor/',
  version: {
    selector: '.uppercase'
  },
  download: {
    plain: 'https://www.jam-software.com/smartcallmonitor/SmartCallMonitor-Demo-Setup.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno.type(output, iPath, null, '1')
  }
}
module.exports = data
