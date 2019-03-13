'use strict'

let data = {
  url: 'https://www.zdsoft.com/downloads.html',
  version: {
    selector: 'a[href="screen-recorder-history.html"]'
  },
  download: {
    plain: 'https://www.zdsoft.com/download/SRSetup.zip'
  },
  install: function (output, iPath) {
    return require('./../js/install')(output, iPath)
  }
}
module.exports = data
