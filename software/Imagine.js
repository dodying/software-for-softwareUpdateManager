'use strict'

let data = {
  url: 'http://www.nyam.pe.kr/dev/imagine/',
  version: '.lead .label-default',
  changelog: {
    url: 'http://www.nyam.pe.kr/dev/imagine/doc/Whatsnew.txt',
    match: /^v[\d.]+/,
    split: true
  },
  download: '[data-lang-id="zip_version"]',
  install: 'install'
}
module.exports = data
