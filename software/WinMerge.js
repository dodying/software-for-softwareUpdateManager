'use strict'

let data = {
  withoutHeader: true,
  url: 'http://winmerge.org/downloads/',
  version: 'h3',
  changelog: {
    url: 'https://winmerge.org/docs/changelog.php',
    selector: '#content>pre',
    attr: 'text',
    match: /^WinMerge [\d.]+/,
    split: true
  },
  download: 'a[href$="x64-exe.zip"]',
  install: 'install'
}
module.exports = data
