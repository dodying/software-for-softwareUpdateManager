'use strict'

let data = {
  url: 'https://www.gog.com/galaxy',
  version: ['.glx-button--blue[href$=".exe"]', 'href', /setup_galaxy_(.*?).exe/],
  download: '.glx-button--blue[href$=".exe"]',
  install: 'install_inno_cli'
}
module.exports = data
