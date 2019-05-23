'use strict'

let data = {
  url: 'https://www.flixgrab.com/',
  version: {
    selector: '.font_9>[style="font-family:open sans,sans-serif;"]'
  },
  download: {
    plain: 'http://downloads.flixgrab.com/flixgrabplus.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
