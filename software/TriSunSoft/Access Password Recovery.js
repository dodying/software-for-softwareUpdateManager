'use strict'

let data = {
  commercial: 3,
  url: 'https://www.trisunsoft.com/access-password-recovery/',
  version: {
    selector: '.green-button>span:nth-child(3)'
  },
  download: {
    plain: 'https://www.trisunsoft.com/access-password-recovery/access-password-recovery.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
