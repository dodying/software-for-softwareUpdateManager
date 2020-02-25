'use strict'

let data = {
  url: 'https://mubu.com/apps',
  version: ['.download-desktop', 'href', /Mubu-([\d.]+).exe/],
  download: '.download-desktop',
  install: ['install_zipped', 'install', 'app-32.7z']
}
module.exports = data
