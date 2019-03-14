'use strict'

let data = {
  commercial: 2,
  url: 'https://singularlabs.com/software/system-ninja/confirm-download/',
  version: {
    selector: 'h2'
  },
  download: {
    plain: 'https://singularlabs.com/download/10294/'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
