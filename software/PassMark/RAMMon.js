'use strict'

let data = {
  url: 'https://www.passmark.com/products/rammon.htm',
  version: ['li:contains("Version")', 'text', /([\d.]+) \(Build (\d+)\)/, '$1.$2'],
  download: 'https://www.passmark.com/ftp/rammon.exe',
  install: 'install_inno'
}
module.exports = data
