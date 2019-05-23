'use strict'

let data = {
  commercial: 3,
  url: 'https://vovsoft.com/software/vcf-to-csv-converter/',
  version: {
    selector: 'h1'
  },
  download: {
    plain: 'http://vovsoft.com/files/vcf-to-csv-converter.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
