'use strict'

let data = {
  commercial: 3,
  url: 'https://www.passmark.com/products/pt_history.htm',
  version: {
    selector: 'p>strong',
    match: /V(\d.*) -/
  },
  download: {
    plain: 'https://www.passmark.com/ftp/petst.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
