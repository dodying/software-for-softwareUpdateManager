'use strict'

let data = {
  url: 'https://release.tinymediamanager.org/download_v3.html',
  version: ['a[href$="win.zip"]', 'href'],
  changelog: ['https://www.tinymediamanager.org/changelog/', '[id^="Version v"]+p'],
  download: 'a[href$="win.zip"]',
  install: 'install',
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
