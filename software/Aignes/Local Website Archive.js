'use strict'

let data = {
  commercial: 3,
  url: 'https://www.aignes.com/lwa_history.htm',
  version: ['.larger>b', 'text', /\((.*)\)/],
  changelog: '.history',
  download: 'https://www.aignes.info/download/wsasetup.exe',
  install: 'install_inno'
}
module.exports = data
