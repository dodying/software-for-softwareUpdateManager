'use strict'

let data = {
  url: 'https://www.sterjosoft.com/chrome-history.html',
  version: {
    selector: 'h2'
  },
  download: {
    plain: 'https://www.sterjosoft.com/download/click.php?id=56'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data