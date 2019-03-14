'use strict'

let data = {
  url: 'https://en.smath.com/view/SMathStudio/summary',
  version: {
    selector: '[itemprop="softwareVersion"]'
  },
  download: {
    selector: '[title="tar.gz package"]+[itemprop="downloadUrl"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install')
  }
}
module.exports = data
