'use strict'

let data = {
  url: 'http://www.starcodec.com/en/autooff/',
  version: ['[href^="/en/downloading.php?"]', 'href', /ver=(.*)/],
  changelog: 'p:contains("Changes")+ul',
  download: 'http://sg.pintosoft.com/autooff/AutoOff_{version}.exe',
  install: 'install_nsis'
}
module.exports = data
