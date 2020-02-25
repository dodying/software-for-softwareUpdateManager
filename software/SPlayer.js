'use strict'

let data = {
  url: 'https://beta.splayer.org/',
  version: ['a[href$=".exe"]', 'href', /SPlayer-Setup-(.*?).exe/],
  download: 'a[href$=".exe"]',
  install: ['install_zipped', 'install', 'app-64.7z']
}
module.exports = data
