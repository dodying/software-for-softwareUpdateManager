'use strict'

let data = {
  url: 'http://hkcmdr.anymania.com/',
  version: {
    selector: 'font>[href="hkcmdr_inst.exe"]'
  },
  download: {
    plain: 'http://hkcmdr.anymania.com/hkcmdr_inst.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
