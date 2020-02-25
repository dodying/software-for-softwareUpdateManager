'use strict'

let data = {
  site: {
    GitHub: 'https://github.com/nefarius/ScpToolkit/releases/latest'
  },
  downloadChoice: '[href$=".exe"]',
  install: ['install_ai_msi', null, 'ScpToolkit_Setup.x64.msi', 'ScpSettings.exe'],
  other: {
    beta: {
      site: {
        GitHub: 'https://github.com/nefarius/ScpToolkit/releases'
      }
    }
  }
}
module.exports = data
