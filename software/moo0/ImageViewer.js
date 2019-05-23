'use strict'

let data = {
  commercial: 3,
  url: 'https://www.moo0.com/software/ImageViewer/',
  version: {
    selector: '.tdSoftwareInfoData>strong'
  },
  download: {
    plain: 'https://www.moo0.com/software/ImageViewer/download/share/'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
