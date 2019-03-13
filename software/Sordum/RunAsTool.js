'use strict'

let data = {
  url: 'https://www.sordum.org/8727/',
  version: {
    selector: '.entry-title'
  },
  download: {
    plain: 'https://www.sordum.org/files/downloads.php?runastool'
  },
  install: function (output, iPath) {
    return require('./../../js/install')(output, iPath)
  }
}
module.exports = data
