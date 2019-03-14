'use strict'

let data = {
  url: 'https://www.softwareok.com/?Download=DontSleep',
  version: {
    selector: 'h1'
  },
  download: {
    plain: 'https://www.softwareok.com/Download/DontSleep_x64_Portable.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
