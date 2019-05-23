'use strict'

let data = {
  url: 'https://github.com/sysprogs/WinCDEmu/releases/latest',
  version: {
    selector: '.muted-link.css-truncate',
    match: /v(.*)/
  },
  download: {
    selector: 'a[href*="/releases/download/"][href$=".exe"][href*="/WinCDEmu-"]'
  }
}
module.exports = data
