'use strict'

let data = {
  url: 'https://www.mozilla.org/en-US/firefox/developer/notes/',
  version: {
    selector: '.version>h2',
    match: /(.*)/
  },
  download: {
    plain: 'https://download.mozilla.org/?product=firefox-devedition-latest-ssl&os=win64&lang=zh-CN'
  },
  install: function (output, iPath) {
    return require('./../../js/install')(output, iPath, null, 'core')
  }
}
module.exports = data
