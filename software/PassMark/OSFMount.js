'use strict'

let data = {
  url: 'https://www.osforensics.com/tools/mount-disk-images.html',
  version: {
    selector: '.feature:contains("Download")+p'
  },
  download: {
    plain: 'https://www.osforensics.com/downloads/osfmount.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
