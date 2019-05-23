'use strict'

let data = {
  url: 'https://care-eyes.com/release.html',
  version: {
    selector: 'h4'
  },
  download: {
    plain: 'https://care-eyes.com/careueyes/v1/package/CareUEyes_setup.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
