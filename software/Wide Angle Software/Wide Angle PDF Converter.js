'use strict'

let data = {
  commercial: 3,
  site: {
    Softpedia: 'https://www.softpedia.com/get/Office-tools/PDF/Wide-Angle-PDF-Converter.shtml'
  },
  preferPath: 'Wide Angle PDF Converter.exe',
  install: function (output, iPath, fns) {
    return fns.install.ai.msi(output, iPath, null, 'Wide Angle Software PDF Converter.msi', data.preferPath)
  }
}
module.exports = data
