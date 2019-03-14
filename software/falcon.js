'use strict'

let data = {
  url: 'https://github.com/plotly/falcon/releases/latest',
  version: {
    selector: '.muted-link.css-truncate',
    match: /v(.*)/
  },
  download: {
    selector: 'a[href*="/releases/download/"][href*="win"][href$=".zip"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install_zipped', null, 'install', 'app-64.7z')
  }
}
module.exports = data
