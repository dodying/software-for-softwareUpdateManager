'use strict'

let data = {
  withoutHeader: true,
  url: 'https://www.videolan.org/vlc/download-windows.html',
  version: '#downloadVersion',
  changelog: {
    url: 'https://www.videolan.org/developers/vlc-branch/NEWS',
    match: /^Changes between/,
    split: true
  },
  download: 'a[href$="win32.7z"]',
  install: 'install'
}
module.exports = data
