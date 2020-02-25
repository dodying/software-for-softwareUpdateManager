'use strict'

let data = {
  commercial: 3,
  url: 'https://www.geekbench.com/download/windows/',
  version: ['.intro-description>a', 'href', /Geekbench-(.*?)-WindowsSetup.exe/],
  changelog: ['https://www.primatelabs.com/release/geekbench5/', 'ul'],
  download: '.intro-description>a',
  install: 'install_nsis_cli'
}
module.exports = data
