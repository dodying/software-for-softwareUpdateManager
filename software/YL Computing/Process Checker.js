'use strict'

let data = {
  commercial: 3,
  url: 'http://www.pcclean.io/process-checker/',
  version: {
    selector: 'a[href$=".exe"]'
  },
  download: {
    plain: 'http://www.pcclean.io/product-processchecker/process_checker.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
