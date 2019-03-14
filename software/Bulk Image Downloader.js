'use strict'

let data = {
  commercial: 3,
  url: 'https://bulkimagedownloader.com/',
  version: {
    selector: '.smalldark'
  },
  download: {
    selector: 'a[href*="/files/"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
