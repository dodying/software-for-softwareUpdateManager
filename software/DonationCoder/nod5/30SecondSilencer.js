'use strict'

let data = {
  url: 'http://www.dcmembers.com/nod5/download/30secondsilencer/',
  version: ['p:has(strong:contains("Changelog"))+p', 'text', /(.*)/],
  download: ['a.wpdm-download-link', 'onclick', /^this.href='(.*)';$/],
  install: 'install'
}
module.exports = data
