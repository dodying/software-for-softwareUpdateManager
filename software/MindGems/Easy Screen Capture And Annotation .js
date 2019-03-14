'use strict'

let data = {
  commercial: 3,
  url: 'https://www.mindgems.com/products/Easy-Screen-Capture-AA/ESCAA-Download.htm',
  version: {
    selector: 'body > div:nth-child(3) > table > tbody > tr:nth-child(3) > td:nth-child(2)'
  },
  download: {
    plain: 'https://www.mindgems.com/software/EasyScreenCaptureAA.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
