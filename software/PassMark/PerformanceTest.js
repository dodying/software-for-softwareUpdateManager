'use strict'

let data = {
  commercial: 3,
  url: 'https://www.passmark.com/products/performancetest/history.php',
  version: ['#block_2>div>div>p', 'text', /([\d.]+ Build \d+)/],
  changelog: '#block_2>div>div>ul',
  download: 'https://www.passmark.com/ftp/petst.exe',
  install: 'install_inno'
}
module.exports = data
