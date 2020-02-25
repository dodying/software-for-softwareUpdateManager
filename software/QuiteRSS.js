'use strict'

let data = {
  withoutHeader: true,
  url: 'https://quiterss.org/en/download',
  version: '.field-item a[href$=".zip"]',
  changelog: ['https://quiterss.org/en/history', '.field-item>ul'],
  download: '.field-item a[href$=".zip"]',
  install: 'install'
}
module.exports = data
