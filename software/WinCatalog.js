'use strict'

let data = {
  commercial: 3,
  url: 'https://www.wincatalog.com/download.html',
  version: 'body > div.body > div > div.content4 > div:nth-child(2) > div > div > table > tbody > tr:nth-child(2) > td:nth-child(2)',
  download: async (res, $, fns, choice) => fns.walkLink('https://www.wincatalog.com/thankyou.html', fns, '[href$="setup.exe"]'),
  install: 'install_inno'
}
module.exports = data
