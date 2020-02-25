'use strict'

let data = {
  url: 'https://www.geany.org/Download/Releases',
  version: 'a[href$="_setup.exe"]',
  changelog: ['https://www.geany.org/documentation/releasenotes/', '#content-main'],
  download: 'a[href$="_setup.exe"]',
  install: 'install_nsis'
}
module.exports = data
