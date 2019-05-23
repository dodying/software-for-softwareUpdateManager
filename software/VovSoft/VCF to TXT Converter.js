'use strict'

let data = {
  commercial: 3,
  url: 'https://vovsoft.com/software/vcf-to-txt-converter/',
  version: {
    selector: 'h1'
  },
  download: {
    plain: 'http://vovsoft.com/files/vcf-to-txt-converter.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
