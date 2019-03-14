'use strict'

let data = {
  commercial: 3,
  url: 'http://www.pcclean.io/dr-folder/download/',
  version: {
    selector: 'a[href$=".exe"]'
  },
  download: {
    plain: 'http://www.pcclean.io/product-drfolder/dfinstall.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
