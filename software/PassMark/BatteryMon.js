'use strict'

let data = {
  commercial: 3,
  url: 'https://www.passmark.com/products/batmon.htm',
  version: ['li:contains("Version")', 'text', /Versions: V(.*)/],
  download: 'https://www.passmark.com/ftp/batmon.exe',
  install: 'install_inno'
}
module.exports = data
