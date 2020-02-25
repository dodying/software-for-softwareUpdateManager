'use strict'

let data = {
  commercial: 2,
  url: 'http://www.pilotedit.com/index.html',
  version: ['[href*="PilotEdit_x64_"][href$=".zip"]', 'href', /PilotEdit_x64_(.*?).zip/],
  download: '[href*="PilotEdit_x64_"][href$=".zip"]',
  install: ['install_zipped', 'install_inno', 'Setup.exe'],
  other: {
    lite: {
      commercial: 0,
      version: ['[href*="PilotEdit_Lite"][href$=".zip"]', 'href', /PilotEdit_Lite(.*?).zip/],
      download: '[href*="PilotEdit_Lite"][href$=".zip"]'
    }
  }
}
module.exports = data
