'use strict'

let data = {
  site: {
    GitHub: 'https://github.com/comictagger/comictagger/releases/latest'
  },
  downloadChoice: '[href$=".exe.zip"]',
  install: 'install_single',
  other: {
    beta: {
      site: {
        GitHub: 'https://github.com/comictagger/comictagger/releases'
      },
      downloadChoice: '[href$=".exe.zip"]'
    }
  }
}
module.exports = data
