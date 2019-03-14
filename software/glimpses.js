'use strict'

let data = {
  url: 'https://getglimpses.com/',
  version: {
    selector: '#btn-download+div'
  },
  download: {
    plain: 'https://getglimpses.com/Installer/glimpses-setup.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install', 'full.nupkg', null, 'lib\\net45')
  }
}
module.exports = data
