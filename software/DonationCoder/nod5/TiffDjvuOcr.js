'use strict'

let data = {
  url: 'http://www.dcmembers.com/nod5/download/tiffdjvuocr/',
  version: {
    selector: 'p:has(strong:contains("Changelog"))',
    match: /v(.*?)\s/
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
