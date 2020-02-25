'use strict'

let data = {
  site: {
    GitHub: 'https://github.com/LiskHQ/lisk-hub/releases/latest'
  },
  downloadChoice: '[href$=".exe"]',
  install: ['install_zipped', 'install', 'app-64.7z'],
  other: {
    beta: {
      site: {
        GitHub: 'https://github.com/LiskHQ/lisk-hub/releases'
      },
      downloadChoice: '[href$=".exe"]'
    }
  }
}
module.exports = data
