'use strict'

let data = {
  url: 'https://www.videoder.com/download/videoder-for-windows?arch=64',
  version: ['#restart-download-button', 'href', /Setup%20(.*?).exe/],
  download: '#restart-download-button',
  install: ['install_zipped', 'install', 'app-64.7z']
}
module.exports = data
