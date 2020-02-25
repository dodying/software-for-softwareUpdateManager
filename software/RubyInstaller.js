'use strict'

let data = {
  site: {
    GitHub: 'https://github.com/oneclick/rubyinstaller2/releases/latest'
  },
  versionChoice: /RubyInstaller-(.*)/,
  downloadChoice: '[href$="x64.exe"][href*="devkit"]',
  install: 'install_inno',
  other: {
    nodevkit: {
      downloadChoice: '[href$="x64.7z"]',
      install: 'install'
    }
  }
}
module.exports = data
