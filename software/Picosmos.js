'use strict'

let data = {
  url: 'http://www.pcfreetime.com/picosmos/index.php',
  version: {
    selector: '[style="font-size:1em;"]'
  },
  download: {
    selector: 'a[href*="X64"][href$=".exe"]'
  },
  install: function (output, iPath) {
    return require('./../js/install')(output, iPath)
  }
}
module.exports = data
