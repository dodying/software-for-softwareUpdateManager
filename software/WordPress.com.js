'use strict'

let data = {
  site: {
    GitHub: 'https://github.com/Automattic/wp-desktop/releases/latest'
  },
  downloadChoice: '[href$=".exe"]',
  install: ['install_zipped', 'install', 'app-64.7z'],
  other: {
    beta: {
      site: {
        GitHub: 'https://github.com/Automattic/wp-desktop/releases'
      }
    }
  }
}
module.exports = data
