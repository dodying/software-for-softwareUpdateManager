'use strict'

let data = {
  url: 'https://curl.haxx.se/windows/',
  version: ['.relatedbox+p+p', 'text', /Build: (.*?)\s+/],
  changelog: {
    url: 'https://curl.haxx.se/changes.html',
    selector: '.contents',
    attr: 'text',
    match: /Fixed in [\d.]+/,
    split: true
  },
  download: 'a.windl[href$="win64-mingw.zip"]',
  install: ['install', null, '*\\bin']
}
module.exports = data
