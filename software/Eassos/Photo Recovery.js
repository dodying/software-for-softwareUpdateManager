'use strict'

let data = {
  commercial: 2,
  url: 'http://www.eassos.com/download.php',
  version: 'tr:contains("Photo Recovery") .download-ver',
  changelog: 'tr:contains("Photo Recovery") .download-update',
  download: 'tr:contains("Photo Recovery") a[href$=".exe"]',
  install: 'install_inno_type'
}
module.exports = data
