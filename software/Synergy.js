'use strict'

let data = {
  site: {
    GitHub: 'https://github.com/yupi2/synergy/releases/latest'
  },
  versionChoice: /(.*)_master/,
  downloadChoice: '[href$=".msi"][href*="_x64_"]',
  install: ['install_msi', null, 'synergys.exe']
}
module.exports = data
