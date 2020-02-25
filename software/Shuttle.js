'use strict'

let data = {
  site: {
    GitHub: 'https://github.com/sipt/shuttle/releases/latest'
  },
  downloadChoice: '[href$=".zip"][href*="windows_amd64"]',
  install: 'install',
  other: {
    beta: {
      site: {
        GitHub: 'https://github.com/sipt/shuttle/releases'
      }
    }
  }
}
module.exports = data
