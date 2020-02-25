'use strict'

let data = {
  url: 'https://renderdoc.org/builds',
  version: '#win-dl-button',
  changelog: ['https://github.com/baldurk/renderdoc/releases/latest', '.release-header+.markdown-body'],
  download: '#win-dl-button',
  install: ['install_msi', null, 'renderdoccmd.exe'],
  other: {
    nightly: {
      version: ['#win-dl-button2', 'text', /([\d-]+)/],
      download: '#win-dl-button2',
      install: 'install'
    }
  }
}
module.exports = data
