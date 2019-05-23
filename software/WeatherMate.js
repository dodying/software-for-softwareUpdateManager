'use strict'

let data = {
  url: 'https://ravib.com/wm/relnotes.htm',
  version: {
    selector: '[color="#900000"]>b',
    match: /Version (.*?),/
  },
  download: {
    plain: 'https://ravib.com/wm/bin/wm4.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
