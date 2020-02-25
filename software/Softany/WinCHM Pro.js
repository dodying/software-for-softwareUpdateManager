'use strict'

let data = {
  commercial: 3,
  url: 'http://www.softany.com/winchm/download.htm',
  version: 'h1+table >tbody>tr:nth-child(2)>td:nth-child(2)',
  changelog: {
    selector: '#contentfull',
    attr: 'text',
    match: /^Version [\d.]+/,
    split: true
  },
  download: 'http://download.softany.com/WinCHM_setup.exe',
  install: 'install_inno'
}
module.exports = data
