'use strict'

let data = {
  commercial: 3,
  url: 'https://www.photostitcher.com/download.html',
  version: 'h3:contains("Changelog")+p',
  changelog: 'h3:contains("Changelog")+p+ul',
  download: 'https://www.photostitcher.com/download/PhotoStitcherSetup.exe',
  install: 'install_inno_single'
}
module.exports = data
