'use strict'

let data = {
  url: 'https://www.esbconsult.com/esbcalc/esbcalc.htm',
  version: {
    selector: 'p>strong'
  },
  download: {
    plain: 'https://www.esbconsult.com/esbcalcport.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
