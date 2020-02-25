'use strict'

let data = {
  url: 'https://www.yunqa.de/delphi/products/dipp/history',
  version: '.page>.level1+h3',
  changelog: '.page>.level1+h3~.level2',
  download: '[href*="delphi/downloads/"]',
  install: 'install_single'
}
module.exports = data
