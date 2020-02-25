'use strict'

let data = {
  site: {
    GitHub: 'https://github.com/manga-download/hakuneko/releases/latest'
  },
  downloadChoice: '[href$="windows-setup_amd64.exe"]',
  install: 'install_inno',
  other: {
    beta: {
      site: {
        GitHub: 'https://github.com/manga-download/hakuneko/releases'
      },
      versionChoice: /nightly-(.*)/
    }
  }
}
module.exports = data
