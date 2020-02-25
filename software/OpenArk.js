'use strict'

let data = {
  site: {
    GitHub: 'https://github.com/BlackINT3/OpenArk/releases/latest'
  },
  downloadChoice: '[href$="64.exe"]',
  install: 'install_single',
  other: {
    beta: {
      url: 'https://github.com/BlackINT3/OpenArk/releases',
      version: '.markdown-body',
      changelog: '.release-header+.markdown-body',
      download: 'a[href*="/releases/download/"][href$="64.exe"]'
    }
  }
}
module.exports = data
