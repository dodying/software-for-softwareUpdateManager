'use strict'

let data = {
  url: 'https://decimalbasic.ninja-web.net/EnglishWindows.htm',
  version: {
    selector: 'h4+p',
    match: /Ver\.\s+(\d+[\d.]+\d+)\s+/
  },
  download: {
    selector: 'h4+p>a'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
