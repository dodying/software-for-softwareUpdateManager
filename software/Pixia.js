'use strict'

let data = {
  url: 'http://www.ne.jp/asahi/mighty/knight/download.html',
  version: {
    selector: 'a[href*="pix64"]',
    attr: 'href',
    match: /pix64_(.*?)e.exe/
  },
  download: {
    selector: 'a[href*="pix64"]'
  }
  // install: function (output, iPath, fns) {
  //   // InstallShield
  //   return fns.install(output, iPath)
  // }
}
module.exports = data
