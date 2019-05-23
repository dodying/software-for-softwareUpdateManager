'use strict'

let data = {
  url: 'https://www.mozilla.org/en-US/firefox/latest/releasenotes/',
  version: {
    selector: '.c-release-version',
    match: /(.*)/
  },
  download: {
    plain: 'https://download.mozilla.org/?product=firefox-latest-ssl&os=win64&lang=zh-CN'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath, null, 'core')
  },
  other: {
    developer: {
      url: 'https://www.mozilla.org/en-US/firefox/developer/notes/',
      download: {
        plain: 'https://download.mozilla.org/?product=firefox-devedition-latest-ssl&os=win64&lang=zh-CN'
      }
    },
    nightly: {
      url: 'https://www.mozilla.org/en-US/firefox/nightly/notes/',
      download: {
        plain: 'https://download.mozilla.org/?product=firefox-nightly-latest-ssl&os=win64&lang=zh-CN'
      }
    }
  }
}
module.exports = data
