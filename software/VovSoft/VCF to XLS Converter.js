'use strict'

let data = {
  commercial: 3,
  url: 'https://vovsoft.com/software/vcf-to-xls-converter/',
  version: {
    selector: 'h1'
  },
  download: {
    plain: 'http://vovsoft.com/files/vcf-to-xls-converter.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
