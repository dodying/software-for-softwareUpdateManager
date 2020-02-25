'use strict'

let data = {
  url: 'https://www.inputdirector.com/downloads.html',
  version: ['a[href*="downloads/InputDirect"]', 'href', /InputDirector.v([\d.]+).zip/],
  changelog: ['https://www.inputdirector.com/latestnews.html', 'p+ul'],
  download: 'a[href*="downloads/InputDirect"]',
  install: ['install_zipped', 'install_nsis']
}
module.exports = data
