'use strict'

let data = {
  commercial: 3,
  url: 'https://www.exodus.io/download/',
  version: {
    selector: 'a[onclick^="downloadClicked(\'windows"]',
    attr: 'href',
    match: /x64-(.*).exe$/
  },
  download: {
    selector: 'a[onclick^="downloadClicked(\'windows"]'
  },
  install: function (output, iPath) {
    return require('./../js/install_zipped')(output, iPath, 'install', 'full.nupkg', null, 'lib\\net45')
  }
}
module.exports = data
