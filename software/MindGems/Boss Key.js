'use strict'

let data = {
  commercial: 3,
  url: 'https://www.mindgems.com/products/Boss-Key/boss-key-download.htm',
  version: {
    selector: 'body > div:nth-child(3) > table > tbody > tr:nth-child(3) > td:nth-child(2)'
  },
  download: {
    plain: 'https://www.mindgems.com/software/abkinst.exe'
  },
  install: function (output, iPath) {
    return require('./../../js/install_inno')(output, iPath)
  }
}
module.exports = data
