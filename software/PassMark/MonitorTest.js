'use strict'

let data = {
  commercial: 3,
  url: 'https://www.passmark.com/products/monitortest.htm',
  version: ['li:contains("Version")', 'text', /([\d.]+) \(Build (\d+)\)/, '$1.$2'],
  download: 'https://www.passmark.com/ftp/montest.exe',
  install: 'install_inno'
}
module.exports = data
