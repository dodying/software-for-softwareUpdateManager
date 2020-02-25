'use strict'

let data = {
  url: 'http://aezay.dk/aezay/ssdz/',
  version: ['a[href$=".zip"]', 'text', /([\d.]+\w*)/],
  download: 'a[href$=".zip"]',
  install: 'install_zipped_single'
}
module.exports = data
