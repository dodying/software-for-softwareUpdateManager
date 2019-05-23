'use strict'

let data = {
  url: 'http://fincs.ahk4.net/scite4ahk/',
  version: {
    selector: 'a[href="changelog.htm"]>strong'
  },
  download: {
    plain: 'http://fincs.ahk4.net/scite4ahk/dl/s4ahk-portable.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath, null, 'SciTE')
  }
}
module.exports = data
