'use strict'

let data = {
  url: 'https://github.com/webtorrent/webtorrent-desktop/releases/latest',
  version: {
    selector: '.muted-link.css-truncate',
    match: /v(.*)/
  },
  download: {
    selector: 'a[href*="/releases/download/"][href$="-win.zip"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
