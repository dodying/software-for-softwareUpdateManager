'use strict'

let data = {
  url: 'http://www.qvevideo.com/audio',
  version: ['.download>a', 'href', /QveAudio-(.*?).exe/],
  download: '.download>a',
  install: 'install_nsis'
}
module.exports = data
