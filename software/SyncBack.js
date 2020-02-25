'use strict'

let data = {
  commercial: 2,
  url: 'https://www.2brightsparks.com/downloads.html',
  version: 'a.btn[href="/download-syncbackpro.html"]',
  changelog: ['https://www.2brightsparks.com/syncback/changes.html', 'hr+p'],
  download: 'https://www.2brightsparks.com/assets/software/SyncBackPro64_Setup.exe',
  install: 'install_inno_type',
  other: {
    'SE': {
      version: 'a.btn[href="/download-syncbackse.html"]',
      download: 'https://www.2brightsparks.com/assets/software/SyncBackSE64_Setup.exe'
    },
    'Lite': {
      version: 'a.btn[href="/download-syncbacklite.html"]',
      download: 'https://www.2brightsparks.com/assets/software/SyncBackLite_Setup.exe'
    },
    'Free': {
      commercial: 0,
      version: 'a.btn[href="/download-syncbackfree.html"]',
      download: 'https://www.2brightsparks.com/assets/software/SyncBack_Setup.exe'
    }
  }
}
module.exports = data
