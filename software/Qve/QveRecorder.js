'use strict'

let data = {
  url: 'http://www.qvevideo.com/',
  version: ['.download>a', 'href', /QveRecorder-(.*?).exe/],
  download: '.download>a',
  install: 'install_nsis'
}
module.exports = data
