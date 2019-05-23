'use strict'

let data = {
  url: 'https://www.jam-software.com/webaccess/',
  preferPath: 'bin/SpaceObServer.exe',
  version: {
    selector: '.uppercase'
  },
  download: {
    plain: 'https://www.jam-software.com/webaccess/SpaceObServerWebAccess-Demo.msi'
  },
  install: function (output, iPath, fns) {
    return fns.install.msi(output, iPath, null, data.preferPath)
  }
}
module.exports = data
