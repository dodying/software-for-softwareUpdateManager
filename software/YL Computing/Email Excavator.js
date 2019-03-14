'use strict'

let data = {
  commercial: 3,
  url: 'http://www.pcclean.io/email-excavator/download/',
  version: {
    selector: 'a[href$=".exe"]'
  },
  download: {
    plain: 'http://www.pcclean.io/product-emailexcavator/emailexcavator.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
