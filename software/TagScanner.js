'use strict'

let data = {
  url: 'https://www.xdlab.ru/en/download.htm',
  version: 'a[href$=".zip"]',
  changelog: ['https://www.xdlab.ru/en/history.htm', 'h4+ul'],
  download: 'a[href$=".zip"]',
  install: 'install'
}
module.exports = data
