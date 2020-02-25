'use strict'

let data = {
  site: {
    GitHub: 'https://github.com/sysprogs/WinCDEmu/releases/latest'
  },
  downloadChoice: '[href$=".exe"][href*="/WinCDEmu-"]',
  other: {
    portable: {
      downloadChoice: '[href$=".exe"][href*="/PortableWinCDEmu-"]',
      install: 'install_single'
    }
  }
}
module.exports = data
