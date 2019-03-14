'use strict'

let data = {
  url: 'https://www.mozilla.org/en-US/firefox/latest/releasenotes/',
  version: {
    selector: '.version>h2',
    match: /(.*)/
  },
  download: {
    plain: 'https://download.mozilla.org/?product=firefox-latest-ssl&os=win64&lang=zh-CN'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath, null, 'core')
  }
}
module.exports = data
