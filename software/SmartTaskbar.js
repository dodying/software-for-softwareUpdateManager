'use strict'

let data = {
  url: 'https://github.com/ChanpleCai/SmartTaskbar/releases/latest',
  version: {
    selector: '.muted-link.css-truncate',
    match: /v(.*)/
  },
  download: {
    selector: 'a[href*="/releases/download/"][href$=".exe"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno.single(output, iPath, '.exe')
  }
}
module.exports = data
