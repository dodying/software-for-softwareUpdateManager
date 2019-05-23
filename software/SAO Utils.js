'use strict'

let data = {
  url: 'http://sao.gpbeta.com/',
  version: {
    selector: '.jumbotron-code',
    match: /(.*)/
  },
  download: {
    selector: '[aria-labelledby="downloadMenu"] a[href$=".exe"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno.type(output, iPath)
  },
  other: {
    exp: {
      url: 'http://sao.gpbeta.com/exp/',
      install: null
    }
  }
}
module.exports = data
