'use strict'

let data = {
  url: 'http://hibitsoft.ir/StartupManager.html',
  version: '#wb_Text2',
  changelog: {
    url: 'http://www.hibitsoft.ir/HibitStartup/Changelog.txt',
    match: /^HiBit Startup Manager [\d.]+/,
    split: true
  },
  download: '[href$=".exe"]',
  install: 'install_inno'
}
module.exports = data
