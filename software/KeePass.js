'use strict'

let data = {
  withoutHeader: true,
  url: 'https://keepass.info/download.html',
  version: 'body > table > tbody > tr:nth-child(1) > td:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(2) > td:nth-child(2) > small > b',
  download: 'a[href$=".zip/download"]',
  install: 'install'
}
module.exports = data
