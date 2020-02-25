'use strict'

let data = {
  site: {
    GitHub: 'https://github.com/ukanth/monitores/releases/latest'
  },
  versionChoice: [/Google Code Release (.*)$/, true],
  install: 'install',
  other: {
    lite: {
      downloadChoice: '[href$="MonitorESLite.exe"]',
      install: 'install_single'
    }
  }
}
module.exports = data
