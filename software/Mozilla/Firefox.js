'use strict'

let data = {
  url: 'https://www.mozilla.org/en-US/firefox/latest/releasenotes/',
  version: ['.c-release-version', 'text', /(.*)/],
  changelog: '.c-release-notes',
  download: 'https://download.mozilla.org/?product=firefox-latest-ssl&os=win64&lang=zh-CN',
  install: ['install', null, 'core'],
  other: {
    developer: {
      url: 'https://www.mozilla.org/en-US/firefox/developer/notes/',
      download: 'https://download.mozilla.org/?product=firefox-devedition-latest-ssl&os=win64&lang=zh-CN'
    },
    nightly: {
      url: 'https://www.mozilla.org/en-US/firefox/nightly/notes/',
      download: 'https://download.mozilla.org/?product=firefox-nightly-latest-ssl&os=win64&lang=zh-CN'
    }
  }
}
module.exports = data
