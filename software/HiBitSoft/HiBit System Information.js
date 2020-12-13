'use strict'

let data = {
  url: 'http://hibitsoft.ir/SystemInformation.html',
  version: '.info',
  changelog: {
    url: 'http://www.hibitsoft.ir/HiBitSysynfo/Changelog.txt',
    match: /^HiBit System Information [\d.]+/,
    split: true
  },
  download: '[href$=".exe"]',
  install: 'install_inno'
}
module.exports = data
