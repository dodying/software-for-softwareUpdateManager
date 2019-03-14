'use strict'

let data = {
  commercial: 2,
  url: 'https://freeter.io/download',
  version: {
    selector: 'h2'
  },
  download: {
    plain: 'https://freeter.io/download/FreeterSetup.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install', 'full.nupkg', null, 'lib\\net45')
  }
}
module.exports = data
