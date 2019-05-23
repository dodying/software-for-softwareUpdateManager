'use strict'

let data = {
  commercial: 1,
  url: 'https://fishcodelib.com/Database.htm',
  version: {
    selector: '[href="files/DatabaseNet5Pro.zip"]'
  },
  download: {
    plain: 'https://fishcodelib.com/files/DatabaseNet5Pro.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
