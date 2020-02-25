'use strict'

let data = {
  url: 'https://mediaarea.net/DVRescue/Download/Windows',
  version: 'a[href$="Windows_x64.zip"]',
  changelog: {
    url: 'https://raw.githubusercontent.com/MediaArea/dvrescue/master/History.txt',
    match: /^Version [\d.]+/,
    split: true
  },
  download: 'a[href$="Windows_x64.zip"]',
  install: 'install_zipped_single'
}
module.exports = data
