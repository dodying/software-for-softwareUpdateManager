'use strict'

let data = {
  commercial: 2,
  url: 'https://www.zabkat.com/index.htm',
  version: {
    selector: 'h1+p+p'
  },
  download: {
    plain: 'https://www.zabkat.com/download.php?p=3'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  },
  other: {
    ultimate: {
      download: {
        plain: 'https://www.zabkat.com/download.php?p=3&u=1'
      }
    }
  }
}
module.exports = data
