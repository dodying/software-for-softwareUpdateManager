'use strict'

let data = {
  url: 'http://www.pintosoft.com/en/foni',
  version: ['[href^="/en/download?"]', 'href', /ver=(.*?)($|&)/],
  download: 'http://sg.pintosoft.com/foni/{version}/FocusOnIV_{version}.exe',
  install: 'install_nsis'
}
module.exports = data
