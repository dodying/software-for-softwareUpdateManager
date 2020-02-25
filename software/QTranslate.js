'use strict'

let data = {
  url: 'https://quest-app.appspot.com/download',
  version: 'h3',
  changelog: '[id^="version"]>.panel-body',
  download: '.btn-info[href$=".exe"]',
  install: 'install_nsis'
}
module.exports = data
