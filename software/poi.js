'use strict'

let data = {
  site: {
    GitHub: 'https://github.com/poooi/poi/releases/latest'
  },
  downloadChoice: '[href$="win.7z"]:not([href$="ia32-win.7z"])',
  install: 'install',
  other: {
    beta: {
      site: {
        GitHub: 'https://github.com/poooi/poi/releases'
      },
      downloadChoice: '[href$="win.7z"]:not([href$="ia32-win.7z"])'
    }
  }
}
module.exports = data
