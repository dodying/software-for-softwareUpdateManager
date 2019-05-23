'use strict'

let data = {
  url: 'https://www.kalkules.com/download/',
  version: {
    selector: 'h2'
  },
  download: {
    selector: 'h2:contains("zip")+p+p>a'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
