'use strict'

let data = {
  withoutHeader: true,
  url: 'http://dimio.altervista.org/eng/',
  version: {
    selector: 'a[href$="click.php?id=6"]'
  },
  download: {
    plain: 'http://dimiodati.altervista.org/zip/hdhacker.zip'
  },
  install: function (output, iPath) {
    return require('./../../js/install')(output, iPath)
  }
}
module.exports = data
