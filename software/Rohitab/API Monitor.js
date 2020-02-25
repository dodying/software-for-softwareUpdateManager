'use strict'

let data = {
  url: 'https://www.rohitab.com/apimonitor',
  version: ['#Download~a[href$="x64.zip"]', 'text', /API Monitor v(.*?) - Portable/],
  changelog: ['https://www.rohitab.com/apimonitor/changelog', '[id^="Version"]~ul'],
  download: '#Download~a[href$="x64.zip"]',
  install: 'install'
}
module.exports = data
