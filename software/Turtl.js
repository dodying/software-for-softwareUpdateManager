'use strict'

let data = {
  site: {
    GitHub: 'https://github.com/turtl/desktop/releases/latest'
  },
  downloadChoice: '[href$="windows64.msi"]',
  install: ['install_msi', null, 'turtl.exe'],
  other: {
    beta: {
      site: {
        GitHub: 'https://github.com/turtl/desktop/releases'
      }
    }
  }
}
module.exports = data
