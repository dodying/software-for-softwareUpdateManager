'use strict'

let data = {
  useProxy: true,
  url: 'https://openvpn.net/community-downloads/',
  version: {
    selector: 'a[href$="I602.exe"]'
  },
  download: {
    selector: 'a[href$="I602.exe"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
