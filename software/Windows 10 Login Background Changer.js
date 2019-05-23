'use strict'

let data = {
  url: 'https://github.com/Krutonium/Windows-10-Login-Background-Changer/releases/latest',
  version: {
    selector: '.muted-link.css-truncate',
    match: /(.*)/
  },
  download: {
    selector: 'a[href*="/releases/download/"][href$=".zip"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath, null, 'Command Line')
  }
}
module.exports = data
