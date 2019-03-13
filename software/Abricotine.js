'use strict'

let data = {
  url: 'https://github.com/brrd/Abricotine/releases/latest',
  version: {
    selector: '.muted-link.css-truncate',
    match: /(.*)/
  },
  download: {
    selector: 'a[href*="/releases/download/"][href$="windows-x64.exe"]'
  }
}
module.exports = data
