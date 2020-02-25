'use strict'

let data = {
  url: 'https://www.passmark.com/products/diskcheckup.htm',
  version: ['li:contains("Version")', 'text', /([\d.]+) \(Build (\d+)\)/, '$1.$2'],
  download: 'https://www.passmark.com/ftp/diskcheckup.exe',
  install: 'install_inno_type'
}
module.exports = data
