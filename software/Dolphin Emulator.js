'use strict'

let data = {
  url: 'https://dolphin-emu.org/download/',
  version: '#download-stable .infos .version',
  download: '#download-stable .download .download-links .win',
  install: 'install_nsis',
  other: {
    dev: {
      version: ['#download-dev .infos .version', 'text', /(.*)/],
      download: '#download-dev .download .download-links .win',
      install: 'install'
    }
  }
}
module.exports = data
