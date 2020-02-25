'use strict'

let data = {
  url: 'https://gnucash.org/download.phtml',
  version: ['a[href$=".exe"]', 'href', /gnucash-(.*?).setup.exe/],
  download: 'a[href$=".exe"]',
  install: 'install_inno'
}
module.exports = data
