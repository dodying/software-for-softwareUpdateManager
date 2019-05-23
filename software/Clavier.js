'use strict'

let data = {
  url: 'https://github.com/guilryder/clavier-plus/releases/latest',
  version: {
    selector: '.muted-link.css-truncate',
    match: /release(.*)/
  },
  download: {
    selector: 'a[href*="/releases/download/"][href$="64.zip"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
