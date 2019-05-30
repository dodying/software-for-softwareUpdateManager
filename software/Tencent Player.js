'use strict'

let data = {
  url: 'http://player.qq.com/',
  version: {
    selector: '.download_btn[data-href]',
    attr: 'data-href'
  },
  download: {
    selector: '.download_btn[data-href]',
    attr: 'data-href'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
