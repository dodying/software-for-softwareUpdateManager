'use strict'

let data = {
  url: 'https://cjkis.me/capslock+/',
  version: {
    selector: 'a[download]',
    attr: 'href',
    match: /v(.*?).exe/
  },
  download: {
    selector: 'a[download]'
  },
  install: function (output, iPath, fns) {
    return fns.install.single(output, iPath)
  }
}
module.exports = data
