'use strict'

let data = {
  url: 'https://www.filehorse.com/download-psiphon/download/',
  version: {
    selector: '.pageing>li:nth-child(3)'
  },
  download: {
    selector: '#download_url'
  },
  install: function (output, iPath, fns) {
    return fns.install.single(output, iPath)
  }
}
module.exports = data
