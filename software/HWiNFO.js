'use strict'

let data = {
  url: 'https://www.hwinfo.com/download/',
  version: {
    selector: '.download>sub'
  },
  download: {
    selector: 'a[href$=".zip"][href*="sac.sk"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
