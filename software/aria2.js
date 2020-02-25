'use strict'

let data = {
  site: {
    GitHub: 'https://github.com/aria2/aria2/releases/latest'
  },
  versionChoice: /release-(.*)/,
  downloadChoice: '[href*="win-64bit"][href$=".zip"]',
  install: ['install_zipped_single', 'aria2c.exe']
}
module.exports = data
