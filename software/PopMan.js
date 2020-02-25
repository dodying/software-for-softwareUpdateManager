'use strict'

let data = {
  url: 'http://www.ch-software.de/popman/download.htm',
  version: 'a[href$=".exe"]',
  changelog: {
    url: '[href^="changelog"]',
    selector: 'pre',
    attr: 'text',
    split: true
  },
  download: 'http://www.ch-software.de/popman/download/PopMan.exe',
  install: 'install_inno'
}
module.exports = data
