'use strict'

let data = {
  url: 'https://biu.tls.moe/',
  version: {
    selector: '.mdui-color-theme-accent'
  },
  download: {
    plain: 'https://biu.tls.moe/d/?download=p'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
