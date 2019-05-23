'use strict'

let data = {
  commercial: 1,
  url: 'https://www.moo0.com/software/VideoConverter/',
  version: {
    selector: '.tdSoftwareInfoData>strong'
  },
  download: {
    plain: 'https://www.moo0.com/software/VideoConverter/download/free/'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
