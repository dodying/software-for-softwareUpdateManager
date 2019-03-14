'use strict'

let data = {
  url: 'https://www.softwareok.com/?Download=TheAeroClock',
  version: {
    selector: 'h1'
  },
  download: {
    plain: 'https://www.softwareok.com/Download/TheAeroClock_x64.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
