'use strict'

let data = {
  commercial: 3,
  url: 'https://www.passmark.com/products/keytest.htm',
  version: ['li:contains("Version")', 'text', /([\d.]+) \(Build (\d+)\)/, '$1.$2'],
  download: 'https://www.passmark.com/ftp/keytest.exe',
  install: 'install_inno'
}
module.exports = data
