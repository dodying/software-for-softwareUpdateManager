'use strict'

let data = {
  url: 'https://rufus.ie/en_IE.html',
  version: {
    selector: 'a[name="changelog"]~ul b'
  },
  download: {
    selector: 'a[name="download"]~ul a[href$="p.exe"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.single(output, iPath)
  }
}
module.exports = data
