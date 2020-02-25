'use strict'

let data = {
  url: 'http://www.51dzt.com/',
  preferPath: 'ksolaunch.exe',
  version: ['a[href$=".exe"]', 'href'],
  download: 'a[href$=".exe"]',
  install: ['install_zipped', 'install', '\\$EXEFILE', [/^\$/, /^config\.xml$/, /^TypeEasy\.exe$/]]
}
module.exports = data
