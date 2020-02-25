'use strict'

let data = {
  url: 'http://hibitsoft.ir/Uninstaller.html',
  version: '#wb_Text2',
  changelog: {
    url: 'http://www.hibitsoft.ir/HiBitUninstaller/Changelog.txt',
    match: /^HiBit Uninstaller [\d.]+/,
    split: true
  },
  download: '[href$=".exe"]',
  install: 'install_inno'
}
module.exports = data
