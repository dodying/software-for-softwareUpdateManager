'use strict'

let data = {
  url: 'http://www.dcmembers.com/nod5/download/quickpiczone/',
  version: {
    selector: 'p:has(strong:contains("Changelog"))+p',
    match: /(.*)/
  },
  download: {
    selector: 'a.wpdm-download-link',
    attr: 'onclick',
    match: /^this.href='(.*)';$/
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
