'use strict'

let data = {
  site: {
    GitHub: 'https://github.com/AdguardTeam/AdguardForWindows/releases/latest'
  },
  downloadChoice: '[href$=".exe"]',
  install: ['install_wix', null, 'setup.msi', 'Adguard.exe'],
  other: {
    beta: {
      site: {
        GitHub: 'https://github.com/AdguardTeam/AdguardForWindows/releases'
      }
    }
  }
}
module.exports = data
