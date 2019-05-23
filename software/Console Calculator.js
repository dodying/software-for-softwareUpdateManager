'use strict'

let data = {
  url: 'http://www.zoesoft.com/console-calculator/ccalc-downloads/',
  version: {
    selector: 'h3'
  },
  download: {
    plain: 'http://www.zoesoft.com/downloads/CCalc.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
