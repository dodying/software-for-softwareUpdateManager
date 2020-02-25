'use strict'

let data = {
  url: 'https://tinywall.pados.hu/changelog.txt',
  version: ['body', 'text', /(.*) - Maintenance release/],
  changelog: {
    split: true
  },
  download: 'https://tinywall.pados.hu/files/TinyWallInstaller.msi',
  install: ['install_msi', null, 'TinyWall.exe']
}
module.exports = data
