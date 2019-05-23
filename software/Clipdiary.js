'use strict'

let data = {
  commercial: 1,
  url: 'http://clipdiary.com/',
  version: {
    selector: '#DownloadPortableIndexPage'
  },
  download: {
    selector: '#DownloadPortableIndexPage'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
