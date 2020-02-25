'use strict'

let data = {
  url: 'http://www.linuxliveusb.com/en/download',
  version: '.dl-detail',
  changelog: {
    url: 'https://www.linuxliveusb.com/en/release-notes',
    selector: '.content',
    attr: 'text',
    match: /^Version [\d.]+/,
    split: true
  },
  download: 'http://www.linuxliveusb.com/downloads/?stable',
  install: 'install_nsis'
}
module.exports = data
