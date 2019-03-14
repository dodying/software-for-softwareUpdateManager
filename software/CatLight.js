'use strict'

let data = {
  commercial: 3,
  url: 'https://catlight.io/downloads',
  version: {
    selector: '.platform-info'
  },
  download: {
    plain: 'https://catlight.io/downloads/win/beta'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install', 'full.nupkg', null, 'lib\\net45')
  }
}
module.exports = data
