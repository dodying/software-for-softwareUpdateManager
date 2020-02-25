'use strict'

let data = {
  site: {
    GitHub: 'https://github.com/liberodark/ODrive/releases/latest'
  },
  downloadChoice: '[href$=".exe"]',
  install: ['install_zipped', 'install', 'app-64.7z'],
  other: {
    beta: {
      site: {
        GitHub: 'https://github.com/liberodark/ODrive/releases'
      },
      downloadChoice: '[href$=".exe"]'
    }
  }
}
module.exports = data
