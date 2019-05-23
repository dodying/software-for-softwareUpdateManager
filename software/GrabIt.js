'use strict'

let data = {
  commercial: 2,
  url: 'https://shemes.com/index.php?p=download',
  version: {
    selector: 'td>[href$=".exe"]',
    match: /GrabIt (.*)/
  },
  download: {
    selector: 'td>[href$=".exe"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno.type(output, iPath)
  }
}
module.exports = data
