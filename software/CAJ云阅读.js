'use strict'

let data = {
  url: 'http://cajviewer.cnki.net/cajcloud/',
  version: {
    selector: '.download a',
    attr: 'href'
  },
  download: {
    selector: '.download a'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
