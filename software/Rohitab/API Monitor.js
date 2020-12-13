'use strict'

let data = {
  url: 'http://www.rohitab.com/apimonitor',
  version: ['#Download~a[href$="x64.zip"]', 'text', /API Monitor v(.*?) - Portable/],
  changelog: ['http://www.rohitab.com/apimonitor/changelog', '[id^="Version"]~ul'],
  download: '#Download~a[href$="x64.zip"]',
  install: 'install'
}
module.exports = data
