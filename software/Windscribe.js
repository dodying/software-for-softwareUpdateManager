'use strict'

let data = {
  commercial: 2,
  url: 'https://www.filehorse.com/download-windscribe/download/',
  version: {
    selector: '.pageing>li:nth-child(3)'
  },
  download: {
    selector: '#download_url'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno.type(output, iPath)
  }
}
module.exports = data
