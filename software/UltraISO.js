'use strict'

let data = {
  url: 'https://www.ultraiso.com/download.html',
  version: '#main > table > tbody > tr:nth-child(7) > td:nth-child(2) > div > table > tbody > tr:nth-child(2) > td:nth-child(1)',
  changelog: ['https://www.ultraiso.com/history.html', '#main > table > tbody > tr:nth-child(6)'],
  download: 'a[href$=".exe"]',
  install: 'install_inno'
}
module.exports = data
