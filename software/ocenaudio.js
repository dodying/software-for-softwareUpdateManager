'use strict'

let data = {
  url: 'https://www.ocenaudio.com/',
  version: {
    selector: '#startpage_download_text>h1'
  },
  download: {
    plain: 'https://www.ocenaudio.com/downloads/ocenaudio64.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
