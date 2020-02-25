'use strict'

let data = {
  url: 'https://www.passmark.com/products/rebooter.htm',
  version: ['li:contains("Version")', 'text', /([\d.]+) \(Build (\d+)\)/, '$1.$2'],
  download: 'https://www.passmark.com/ftp/rebooter.zip',
  install: 'install_zipped_single'
}
module.exports = data
