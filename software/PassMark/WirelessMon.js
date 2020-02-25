'use strict'

let data = {
  commercial: 3,
  url: 'https://www.passmark.com/products/wirelessmonitor/history.php',
  version: ['#block_2>div>div>p', 'text', /([\d.]+ build \d+)/],
  changelog: '#block_2>div>div>ul',
  download: 'https://www.passmark.com/ftp/wirelessmon.exe',
  install: 'install_inno'
}
module.exports = data
