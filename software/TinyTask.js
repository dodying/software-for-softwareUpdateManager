'use strict'

let data = {
  url: 'https://www.tinytask.net/',
  version: {
    selector: 'body > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(3) > td:nth-child(1) > center:nth-child(1) > table:nth-child(8) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(3) > table:nth-child(3) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > font:nth-child(5)'
  },
  download: {
    plain: 'https://www.tinytask.net/TinyTask.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
