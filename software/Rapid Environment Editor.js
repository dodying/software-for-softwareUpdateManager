'use strict'

let data = {
  url: 'https://www.rapidee.com/en/download',
  version: {
    selector: '#winxp'
  },
  download: {
    plain: 'https://www.rapidee.com/download/RapidEEx64.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
