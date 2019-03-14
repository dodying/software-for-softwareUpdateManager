'use strict'

let data = {
  url: 'http://www.rejetto.com/hfs/?f=dl',
  version: {
    selector: '#lastver>b',
    match: /(.*)/
  },
  download: {
    plain: 'http://www.rejetto.com/hfs/download'
  },
  install: function (output, iPath, fns) {
    return fns.install.single(output, iPath)
  }
}
module.exports = data
