'use strict'

let data = {
  url: 'https://www.dotpdn.com/downloads/pdn.html',
  version: 'a[href$=".zip"]+b',
  changelog: ['https://www.getpaint.net/roadmap.html', '[size]>ul'],
  download: 'a[href$=".zip"]',
  install: ['install_zipped', 'install_nsis']
}
module.exports = data
