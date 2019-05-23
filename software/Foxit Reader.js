'use strict'

let data = {
  site: {
    Softpedia: 'https://www.softpedia.com/get/Office-tools/PDF/Foxit-PDF-Reader.shtml'
  },
  preferPath: 'FoxitReader.exe',
  install: function (output, iPath, fns) {
    return fns.install.msi(output, iPath, null, data.preferPath)
  }
}
module.exports = data
