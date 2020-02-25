'use strict'

let data = {
  url: 'https://mpv.srsfckn.biz/',
  version: ['.latest>td', 'text', /(.*)/],
  changelog: {
    url: '[href^="/changes/"]',
    selector: '.note'
  },
  download: '.latest a[href^="/mpv-x86_64"]',
  install: ['install', 'doc']
}
module.exports = data
