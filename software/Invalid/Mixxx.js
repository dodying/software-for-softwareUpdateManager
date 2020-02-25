'use strict'

let data = {
  withoutHeader: true,
  url: 'https://mixxx.org/download/',
  version: 'h1',
  download: 'a[href$="win64.exe"]',
  install: ['install_wix', null, /^mixxx/, 'mixxx.exe']
}
module.exports = data
