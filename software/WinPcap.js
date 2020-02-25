'use strict'

let data = {
  url: 'https://www.winpcap.org/install/default.htm',
  version: 'p+h1',
  changelog: ['https://www.winpcap.org/misc/changelog.htm', '.content>ul'],
  download: 'a[href$=".exe"]',
  install: 'install_nsis'
}
module.exports = data
