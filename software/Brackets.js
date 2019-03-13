'use strict'

let data = {
  url: 'https://github.com/adobe/brackets/releases/latest',
  preferPath: 'Brackets.exe',
  version: {
    selector: '.muted-link.css-truncate',
    match: /release-(.*)/
  },
  download: {
    selector: 'a[href*="/releases/download/"][href$=".msi"]'
  },
  install: function (output, iPath) {
    return require('./../js/install_msi')(output, iPath, null, data.preferPath)
  }
}
module.exports = data
