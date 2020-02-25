'use strict'

let data = {
  site: {
    GitHub: 'https://github.com/adobe/brackets/releases/latest'
  },
  versionChoice: /release-(.*)/,
  downloadChoice: '[href$=".msi"]',
  install: ['install_msi', null, 'Brackets.exe']
}
module.exports = data
