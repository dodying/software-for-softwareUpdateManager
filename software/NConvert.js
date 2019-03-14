'use strict'

let data = {
  commercial: 1,
  url: 'https://www.xnview.com/en/nconvert/',
  version: {
    selector: '.muted'
  },
  download: {
    plain: 'http://download.xnview.com/NConvert-win64.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
