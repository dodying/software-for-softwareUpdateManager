'use strict'

let data = {
  url: 'http://www.qvevideo.com/video-converter',
  version: ['.download>a', 'href', /QveVideoConverter-(.*?).exe/],
  download: '.download>a',
  install: 'install_nsis'
}
module.exports = data
