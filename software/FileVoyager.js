'use strict'

let data = {
  url: 'https://www.filevoyager.com/download/',
  version: 'a[href$="Full.7z"]',
  changelog: {
    url: 'https://www.filevoyager.com/doc/changelog/',
    selector: '.entry-content',
    attr: 'text',
    match: /^[\d.]+/,
    split: true
  },
  download: 'a[href$="Full.7z"]',
  install: 'install'
}
module.exports = data
