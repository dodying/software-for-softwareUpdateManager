'use strict'

let data = {
  url: 'http://www.avantbrowser.com/download.aspx',
  version: {
    selector: 'h2',
    match: /(\d{4} build \d+)/
  },
  download: {
    plain: 'http://dl3.avantbrowser.com/avant.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
