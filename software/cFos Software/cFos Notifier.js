'use strict'

let data = {
  url: 'https://www.cfos.de/en/download/download.htm',
  version: {
    selector: '#cfosnotifier>.red'
  },
  download: {
    plain: 'https://www.cfos.de/files/notify.msi'
  },
  preferPath: 'notify.exe',
  install: function (output, iPath, fns) {
    return fns.install.msi(output, iPath, null, data.preferPath)
  }
}
module.exports = data
