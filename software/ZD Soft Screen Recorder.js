'use strict'

let data = {
  commercial: 2,
  url: 'https://www.zdsoft.com/downloads.html',
  version: {
    selector: 'a[href="screen-recorder-history.html"]'
  },
  download: {
    plain: 'https://www.zdsoft.com/download/SRSetup.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
