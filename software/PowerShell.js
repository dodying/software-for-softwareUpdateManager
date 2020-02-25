'use strict'

let data = {
  site: {
    GitHub: 'https://github.com/PowerShell/PowerShell/releases/latest'
  },
  downloadChoice: '[href$="win-x64.zip"]',
  install: 'install',
  other: {
    beta: {
      site: {
        GitHub: 'https://github.com/PowerShell/PowerShell/releases'
      },
      downloadChoice: '[href$="win-x64.zip"]'
    }
  }
}
module.exports = data
