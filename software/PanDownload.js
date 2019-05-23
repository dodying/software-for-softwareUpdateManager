'use strict'

let data = {
  url: 'http://pandownload.club/',
  version: {
    selector: 'meta[name="description"]',
    attr: 'content'
  },
  download: {
    selector: '#pandownload+h4+ul a[href^="http://pandownload."]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
