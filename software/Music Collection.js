'use strict'

let data = {
  url: 'http://www.gsoft4u.com/downloads',
  version: {
    selector: 'tr.tablebody:nth-child(2) > td:nth-child(2)'
  },
  download: {
    plain: 'http://www.gsoft4u.com/down/Music%20Collection%20Portable.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno.type(output, iPath)
  }
}
module.exports = data
