'use strict'

let data = {
  url: 'https://ravib.com/takestock/2/relnotes.htm',
  version: {
    selector: '[bgcolor="aliceblue"] b',
    match: /Version (.*?),/
  },
  download: {
    plain: 'http://ravib.com/takestock/2/TakeStock2Portable.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
