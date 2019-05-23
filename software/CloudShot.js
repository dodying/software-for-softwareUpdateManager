'use strict'

let data = {
  url: 'https://cloudshot.com/whatIsNew.html',
  version: {
    selector: 'h5'
  },
  download: {
    plain: 'https://cloudshot.com/downloads/release/CloudShotSetup.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install', 'full.nupkg', null, 'lib\\net45')
  }
}
module.exports = data
