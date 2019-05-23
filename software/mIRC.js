'use strict'

let data = {
  url: 'https://www.mirc.com/get.html',
  version: {
    selector: 'td>strong'
  },
  download: {
    plain: 'https://www.mirc.com/get.php'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
