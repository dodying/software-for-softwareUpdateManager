'use strict'

let data = {
  url: 'https://github.com/oneclick/rubyinstaller2/releases/latest',
  version: {
    selector: '.muted-link.css-truncate',
    match: /RubyInstaller-(.*)/
  },
  download: {
    selector: 'a[href*="/releases/download/"][href$="x64.exe"][href*="devkit"]'
  },
  install: function (output, iPath) {
    return require('./../js/install_inno')(output, iPath)
  },
  other: {
    nodevkit: {
      download: {
        selector: 'a[href*="/releases/download/"][href$="x64.7z"]'
      },
      install: function (output, iPath) {
        return require('./../js/install')(output, iPath)
      }
    }
  }
}
module.exports = data
