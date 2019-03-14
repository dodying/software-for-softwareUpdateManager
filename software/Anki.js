'use strict'

let data = {
  url: 'https://apps.ankiweb.net/',
  version: {
    selector: '#windows a.btn'
  },
  download: {
    selector: '#windows a.btn'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
