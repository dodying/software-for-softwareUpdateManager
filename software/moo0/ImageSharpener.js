'use strict'

let data = {
  commercial: 1,
  url: 'https://www.moo0.com/software/ImageSharpener/',
  version: {
    selector: '.tdSoftwareInfoData>strong'
  },
  download: {
    plain: 'https://www.moo0.com/software/ImageSharpener/download/free/'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data