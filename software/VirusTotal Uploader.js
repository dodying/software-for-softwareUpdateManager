'use strict'

let data = {
  url: 'https://www.virustotal.com/en/documentation/desktop-applications/',
  version: ['[href$=".exe"]', 'href'],
  download: '[href$=".exe"]',
  install: ['install_zipped_single', 'VirusTotalUploader']
}
module.exports = data
