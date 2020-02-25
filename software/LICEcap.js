'use strict'

let data = {
  url: 'https://www.cockos.com/licecap/',
  version: 'a[href$="install.exe"]',
  changelog: 'a[href$="install.exe"]+br+ul',
  download: 'a[href$="install.exe"]',
  install: ['install_zipped_single', 'licecap.exe']
}
module.exports = data
