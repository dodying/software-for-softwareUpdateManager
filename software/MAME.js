'use strict'

let data = {
  site: {
    GitHub: 'https://github.com/mamedev/mame/releases/latest'
  },
  versionChoice: [/([\d.]+)/, true],
  downloadChoice: '[href$="64bit.exe"]',
  install: 'install'
}
module.exports = data
