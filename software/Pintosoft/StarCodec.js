'use strict'

let data = {
  url: 'http://www.starcodec.com/en/x64.php',
  version: ['[href^="/en/downloading.php?"]', 'href', /ver=(.*?)($|&)/],
  download: 'http://sg.pintosoft.com/codec/StarCodec64_{version}.exe',
  install: 'install_nsis'
}
module.exports = data
