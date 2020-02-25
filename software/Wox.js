'use strict'

let data = {
  site: {
    GitHub: 'https://github.com/Wox-launcher/Wox/releases/latest'
  },
  downloadChoice: '[href*="Wox-"][href$=".exe"]',
  install: ['install_zipped', 'install', 'full.nupkg', null, 'lib\\net*'],
  other: {
    beta: {
      site: {
        GitHub: 'https://github.com/Wox-launcher/Wox/releases'
      }
    }
  }
}
module.exports = data
