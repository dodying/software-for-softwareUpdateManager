'use strict'

let data = {
  url: 'https://www.sterjosoft.com/network-scanner.html',
  version: {
    selector: 'h2'
  },
  download: {
    plain: 'https://www.sterjosoft.com/download/click.php?id=16'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
