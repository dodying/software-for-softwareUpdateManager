'use strict'

let data = {
  url: 'http://mfiles.maokebing.com/',
  version: ['[href$="green.zip"]', 'href', /mfiles-helper-(.*)-win/],
  download: '[href$="green.zip"]',
  install: 'install'
}
module.exports = data
