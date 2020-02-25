'use strict'

let data = {
  url: 'https://nitroshare.net/',
  version: ['[href$="x86_64.exe"]', 'href', /nitroshare-(.*?)-windows-x86_64.exe/],
  download: '[href$="x86_64.exe"]',
  install: 'install_inno'
}
module.exports = data
