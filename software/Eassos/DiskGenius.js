'use strict'

let data = {
  commercial: 2,
  url: 'http://www.eassos.com/download.php',
  version: 'tr:contains("DiskGenius") .download-ver',
  changelog: 'tr:contains("DiskGenius") .download-update',
  download: 'tr:contains("DiskGenius Pro") a[href$=".exe"]',
  install: 'install_inno_type',
  other: {
    free: {
      commercial: 0,
      version: 'tr:contains("DiskGenius Free") .download-ver',
      changelog: 'tr:contains("DiskGenius Free") .download-update',
      download: 'tr:contains("DiskGenius Free") a[href$=".exe"]'
    }
  }
}
module.exports = data
