'use strict'

let data = {
  url: 'http://aezay.dk/aezay/fsbextractor/',
  version: ['a[href$=".rar"]', 'text', /([\d.]+\w*)/],
  download: 'a[href$=".rar"]',
  install: 'install_zipped_single'
}
module.exports = data
