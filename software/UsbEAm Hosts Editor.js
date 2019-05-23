'use strict'

let data = {
  url: 'https://www.dogfight360.com/Usbeam/Patch.php',
  version: {
    selector: '.entry-title'
  },
  download: {
    selector: 'a[href$=".zip"]:contains("下载")'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
