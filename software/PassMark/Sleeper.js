'use strict'

let data = {
  url: 'https://www.passmark.com/products/sleeper/history.php',
  version: ['#block_2>div>div>p', 'text', /([\d.]+) \((\d+)\)/, '$1.$2'],
  changelog: '#block_2>div>div>ul',
  download: 'https://www.passmark.com/ftp/sleeper.zip',
  install: 'install_zipped_single'
}
module.exports = data
