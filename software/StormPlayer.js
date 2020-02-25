'use strict'

let data = {
  url: 'http://home.baofeng.com/',
  version: ['[href$=".exe"]', 'href', /Baofeng16-([\d.]+).exe/],
  download: '[href$=".exe"]',
  install: 'install'
}
module.exports = data
