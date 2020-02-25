'use strict'

let data = {
  site: {
    GitHub: 'https://github.com/lordmulder/mediainfo-gui/releases/latest'
  },
  downloadChoice: '[href$=".zip"][href*="MediaInfo-GUI"]',
  install: 'install_zipped_single',
  other: {
    cli: {
      downloadChoice: '[href$=".zip"][href*="MediaInfo-CLI"]'
    }
  }
}
module.exports = data
