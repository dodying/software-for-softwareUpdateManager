'use strict'

let data = {
  site: {
    GitHub: 'https://github.com/careteditor/issues/releases/latest'
  },
  downloadChoice: '[href$="full.nupkg"]',
  install: ['install_zipped', 'install', 'full.nupkg', null, 'lib\\net*'],
  other: {
    beta: {
      site: {
        GitHub: 'https://github.com/careteditor/releases-beta/releases/latest'
      }
    }
  }
}
module.exports = data
