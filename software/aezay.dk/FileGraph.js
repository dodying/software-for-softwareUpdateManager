'use strict'

let data = {
  url: 'http://aezay.dk/aezay/filegraph/',
  version: ['a[href$=".rar"]', 'text', /([\d.]+\w*)/],
  download: 'a[href$=".rar"]',
  install: 'install'
}
module.exports = data
