'use strict'

let data = {
  commercial: 3,
  url: 'https://www.aignes.com/wsw_history.htm',
  version: ['.larger>b', 'text', /\((.*)\)/],
  changelog: '.history',
  download: 'https://www.aignes.info/download/wswsetup.exe',
  install: 'install_inno',
  other: {
    free: {
      commercial: 0,
      download: 'https://www.aignes.info/download/wswfreesetup.exe'
    }
  }
}
module.exports = data
