'use strict'

let data = {
  url: 'http://www.dcmembers.com/skwire/download/playtime/',
  version: {
    selector: 'a.wpdm-download-link'
  },
  download: {
    selector: 'a.wpdm-download-link',
    attr: 'onclick',
    match: /^this.href='(.*)';$/
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
