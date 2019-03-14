'use strict'

let data = {
  url: 'https://www.palemoon.org/',
  version: {
    selector: '.topnewstext br+.bold'
  },
  download: {
    plain: 'https://www.palemoon.org/download.php?mirror=as&bits=64&type=installer'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath, null, 'core')
  }
}
module.exports = data
