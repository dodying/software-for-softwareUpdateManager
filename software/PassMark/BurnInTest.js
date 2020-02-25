'use strict'

let data = {
  commercial: 3,
  url: 'https://www.passmark.com/products/burnintest/history.php',
  version: ['#block_2>div>div>p', 'text', /([\d.]+ build \d+)/],
  changelog: '#block_2>div>div>ul',
  download: 'https://www.passmark.com/ftp/bitpro.exe',
  install: 'install_inno_type'
}
module.exports = data
