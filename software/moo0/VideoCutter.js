'use strict'

let data = {
  commercial: 1,
  url: 'https://www.moo0.com/software/VideoCutter/',
  version: {
    selector: '.tdSoftwareInfoData>strong'
  },
  download: {
    plain: 'https://www.moo0.com/software/VideoCutter/download/free/'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data