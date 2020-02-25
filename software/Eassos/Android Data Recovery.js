'use strict'

let data = {
  commercial: 2,
  url: 'http://www.eassos.com/download.php',
  version: 'tr:contains("Android Data Recovery") .download-ver',
  changelog: 'tr:contains("Android Data Recovery") .download-update',
  download: 'tr:contains("Android Data Recovery") a[href$=".exe"]',
  install: 'install_inno_type'
}
module.exports = data
