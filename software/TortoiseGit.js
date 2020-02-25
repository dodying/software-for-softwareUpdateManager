'use strict'

let data = {
  url: 'https://tortoisegit.org/download/',
  version: 'h1+p',
  changelog: {
    url: 'https://tortoisegit.org/docs/releasenotes/',
    selector: '.releasenotes',
    attr: 'text',
    match: /^#Release_[\d.]+/,
    split: true
  },
  download: '.dl[href$="64bit.msi"]',
  install: ['install_msi', null, 'bin/TortoiseGitBlame.exe']
}
module.exports = data
