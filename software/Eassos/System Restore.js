'use strict'

let data = {
  commercial: 2,
  url: 'http://www.eassos.com/download.php',
  version: 'tr:contains("System Restore") .download-ver',
  changelog: 'tr:contains("System Restore") .download-update',
  download: 'tr:contains("System Restore") a[href$=".exe"]',
  install: 'install_inno_type'
}
module.exports = data
