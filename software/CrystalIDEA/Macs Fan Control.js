'use strict'

let data = {
  url: 'https://github.com/crystalidea/macs-fan-control/releases/latest',
  version: {
    selector: '.muted-link.css-truncate',
    match: /v(.*)/
  },
  download: {
    selector: 'a[href*="/releases/download/"][href$=".exe"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath, null, { '{code_Qt32Dir}': '{dir}' })
  }
}
module.exports = data
