'use strict'

let data = {
  url: 'https://nextcloud.com/install/',
  version: {
    selector: '#tab-desktop > div > div:nth-child(1) > p:nth-child(1)'
  },
  download: {
    selector: 'a[href$="setup.exe"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
