'use strict'

let data = {
  url: 'http://www.nncron.ru/download.shtml',
  version: ['body > table:nth-child(3) > tbody > tr > td > table > tbody > tr > td > table > tbody > tr > td > table.text > tbody > tr > td > table > tbody > tr:nth-child(5) > td:nth-child(4)', 'text', /(.*)/],
  download: 'body > table:nth-child(3) > tbody > tr > td > table > tbody > tr > td > table > tbody > tr > td > table.text > tbody > tr > td > table > tbody > tr:nth-child(5) > td:nth-child(1) > a',
  install: 'install_nsis'
}
module.exports = data
