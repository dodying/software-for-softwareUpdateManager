'use strict'

let data = {
  url: 'https://github.com/traccar/traccar/releases/latest',
  version: {
    selector: '.muted-link.css-truncate',
    match: /v(.*)/
  },
  download: {
    selector: 'a[href*="/releases/download/"][href*="windows"][href$=".zip"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install_inno', '.exe')
  }
}
module.exports = data
