'use strict'

let data = {
  url: 'http://strawberryperl.com/releases.html',
  version: {
    selector: '.file>tbody>tr:nth-child(2)>td'
  },
  download: {
    selector: '.file>tbody>tr:nth-child(2)>td:nth-child(4)>a[href$="64bit-portable.zip"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
