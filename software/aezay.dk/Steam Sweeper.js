'use strict'

let data = {
  url: 'http://aezay.dk/aezay/steamsweeper/',
  version: ['a[href$=".zip"]', 'text', /([\d.]+\w*)/],
  download: 'a[href$=".zip"]',
  install: 'install'
}
module.exports = data
