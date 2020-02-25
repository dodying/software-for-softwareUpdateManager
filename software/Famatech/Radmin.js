'use strict'

let data = {
  commercial: 3,
  url: 'https://www.radmin.com/download/',
  version: 'h3:contains("Radmin Viewer")',
  download: '.d1[href$=".zip"][href*="Radmin_Viewer"]',
  install: 'install',
  other: {
    server: {
      version: 'h3:contains("Radmin Server")',
      download: '.d1[href$=".msi"][href*="Radmin_Server"]',
      install: 'install_msi_cli'
    }
  }
}
module.exports = data
