'use strict'

let data = {
  url: 'https://www.yunqa.de/delphi/products/wikitaxi/history',
  version: '.page>.level1+h2',
  changelog: '.page>.level1+h2~.level2',
  download: '[href*="delphi/downloads/"]',
  install: 'install'
}
module.exports = data
