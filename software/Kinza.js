'use strict'

let data = {
  url: 'https://www.kinza.jp/en/download/thankyou/windows_x64/',
  version: ['body > section > div > p > a', 'href', /kinza_x64_([\d.]+).exe/],
  download: 'body > section > div > p > a',
  install: ['install_zipped', 'install']
}
module.exports = data
