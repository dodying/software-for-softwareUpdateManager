'use strict'

let data = {
  url: 'https://release.tinymediamanager.org/download_v2.html',
  version: {
    selector: 'a[href$="win.zip"]',
    attr: 'href'
  },
  download: {
    selector: 'a[href$="win.zip"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  },
  other: {
    prerelease: {
      url: 'https://prerelease.tinymediamanager.org/download_v3.html',
      version: {
        selector: 'a[href$="win.zip"] .a-btn-text>small:nth-child(2)',
        match: /Date: (.*)/
      }
    },
    nightly: {
      url: 'https://nightly.tinymediamanager.org/download_v3.html',
      version: {
        selector: 'a[href$="win.zip"] .a-btn-text>small:nth-child(2)',
        match: /Date: (.*)/
      }
    }
  }
}
module.exports = data
