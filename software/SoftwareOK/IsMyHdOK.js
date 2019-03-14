'use strict'

let data = {
  url: 'https://www.softwareok.com/?Download=IsMyHdOK',
  version: {
    selector: 'h1'
  },
  download: {
    plain: 'https://www.softwareok.com/Download/IsMyHdOK_x64.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
