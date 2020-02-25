'use strict'

let data = {
  commercial: 2,
  url: 'http://www.eassos.com/download.php',
  version: 'tr:contains("iPhone Data Recovery") .download-ver',
  changelog: 'tr:contains("iPhone Data Recovery") .download-update',
  download: 'tr:contains("iPhone Data Recovery") a[href$=".exe"]',
  install: 'install_inno_type'
}
module.exports = data
