'use strict'

let data = {
  site: {
    GitHub: 'https://github.com/wixtoolset/wix3/releases/latest'
  },
  versionChoice: [/v([\d.]+)/, true],
  downloadChoice: '[href$="binaries.zip"]',
  install: 'install'
}
module.exports = data
