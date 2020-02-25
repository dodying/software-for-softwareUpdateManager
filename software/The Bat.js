'use strict'

let data = {
  commercial: 3,
  url: 'https://www.ritlabs.com/en/products/thebat/download.php',
  version: '#whatsnew>h5',
  changelog: '#whatsnew',
  download: '[href^="/download/the_bat/thebat_64"][href$=".msi"]',
  install: ['install_msi', null, 'thebat64.exe']
}
module.exports = data
