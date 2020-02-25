'use strict'

let data = {
  url: 'https://alltags.net/?target=download&lang=en_us',
  version: '.alternating > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(1)',
  changelog: ['https://alltags.net/?target=news&lang=en_us', '.content'],
  download: '[href$="64bit.zip"]',
  install: 'install'
}
module.exports = data
