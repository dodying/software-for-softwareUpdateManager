'use strict'

let data = {
  commercial: 2,
  url: 'http://www.eassos.com/download.php',
  version: 'tr:contains("Eassos Recovery") .download-ver',
  changelog: 'tr:contains("Eassos Recovery") .download-update',
  download: 'tr:contains("Eassos Recovery") a[href$=".exe"][href*="ERSetup"]',
  install: 'install_inno_type',
  other: {
    free: {
      commercial: 0,
      version: 'tr:contains("Eassos Recovery Free") .download-ver',
      changelog: 'tr:contains("Eassos Recovery Free") .download-update',
      download: 'tr:contains("Eassos Recovery Free") a[href$=".exe"]'
    }
  }
}
module.exports = data
