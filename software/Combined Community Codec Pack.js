'use strict'

let data = {
  url: 'http://www.cccp-project.net/download.php?type=cccp64',
  version: ['a[href$=".exe"]', 'href', /64bit-(.*?).exe$/],
  download: 'a[href$=".exe"]',
  install: 'install_inno'
}
module.exports = data
