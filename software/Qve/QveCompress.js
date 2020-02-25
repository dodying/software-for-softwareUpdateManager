'use strict'

let data = {
  url: 'http://www.qvevideo.com/compress',
  version: ['.download>a', 'href', /QveCompress-(.*?).exe/],
  download: '.download>a',
  install: 'install_nsis'
}
module.exports = data
