'use strict'

let data = {
  commercial: 3,
  url: 'https://www.winreducer.net/winreducer-ex-100.html',
  version: ['h2', 'text', /WinReducer EX-100 - v(.*)/],
  changelog: {
    url: '[href$="changelog_wrex100.txt"]',
    match: /^\* WinReducer EX-100 - v[\d.]+/,
    split: true
  },
  download: '[href$="winreducerex100_x64.zip"]',
  install: 'install'
}
module.exports = data
