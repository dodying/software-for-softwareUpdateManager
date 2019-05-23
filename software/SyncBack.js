'use strict'

let data = {
  commercial: 2,
  url: 'https://www.2brightsparks.com/downloads.html',
  version: {
    selector: 'a.btn[href="/download-syncbackpro.html"]'
  },
  download: {
    plain: 'https://www.2brightsparks.com/assets/software/SyncBackPro64_Setup.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno.type(output, iPath)
  },
  other: {
    'SE': {
      version: {
        selector: 'a.btn[href="/download-syncbackse.html"]'
      },
      download: {
        plain: 'https://www.2brightsparks.com/assets/software/SyncBackSE64_Setup.exe'
      }
    },
    'Lite': {
      version: {
        selector: 'a.btn[href="/download-syncbacklite.html"]'
      },
      download: {
        plain: 'https://www.2brightsparks.com/assets/software/SyncBackLite_Setup.exe'
      }
    },
    'Free': {
      commercial: 0,
      version: {
        selector: 'a.btn[href="/download-syncbackfree.html"]'
      },
      download: {
        plain: 'https://www.2brightsparks.com/assets/software/SyncBack_Setup.exe'
      }
    }
  }
}
module.exports = data
