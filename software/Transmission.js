'use strict'

let data = {
  site: {
    GitHub: 'https://github.com/transmission/transmission/releases/latest'
  },
  download: 'https://github.com/transmission/transmission-releases/raw/master/transmission-{version}-x64.msi',
  install: ['install_msi', null, 'transmission-qt.exe']
}
module.exports = data
