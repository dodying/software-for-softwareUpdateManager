'use strict'

let data = {
  commercial: 1,
  url: 'https://www.moo0.com/software/Magnifier/',
  version: {
    selector: '.tdSoftwareInfoData>strong',
    match: /(.*)/
  },
  download: {
    plain: 'https://www.moo0.com/software/Magnifier/download/free/'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
