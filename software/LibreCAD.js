'use strict'

let data = {
  site: {
    GitHub: 'https://github.com/LibreCAD/LibreCAD/releases/latest'
  },
  downloadChoice: '[href$=".exe"]',
  install: 'install_nsis',
  other: {
    beta: {
      site: {
        GitHub: 'https://github.com/LibreCAD/LibreCAD/releases'
      },
      downloadChoice: '[href$=".exe"]'
    }
  }
}
module.exports = data
