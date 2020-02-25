'use strict'

let data = {
  url: 'http://www.pintosoft.com/en/foren',
  version: ['[href^="/en/download?"]', 'href', /ver=(.*?)($|&)/],
  download: 'http://sg.pintosoft.com/foren/FocusOnRenamer{version}.exe',
  install: 'install_nsis'
}
module.exports = data
