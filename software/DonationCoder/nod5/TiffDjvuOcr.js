'use strict'

let data = {
  url: 'http://www.dcmembers.com/nod5/download/tiffdjvuocr/',
  version: ['p:has(strong:contains("Changelog"))', 'text', /v(.*?)\s/],
  download: ['a.wpdm-download-link', 'onclick', /^this.href='(.*)';$/],
  install: 'install'
}
module.exports = data
