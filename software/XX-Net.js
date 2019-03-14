'use strict'

let data = {
  url: 'https://github.com/XX-net/XX-Net/blob/master/code/default/download.md',
  version: {
    selector: '.markdown-body p:contains("Stable") a'
  },
  download: {
    selector: '.markdown-body p:contains("Stable") a'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
