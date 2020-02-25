'use strict'

let data = {
  url: 'http://www.dcmembers.com/skwire/download/playtime/',
  version: 'a.wpdm-download-link',
  download: ['a.wpdm-download-link', 'onclick', /^this.href='(.*)';$/],
  install: 'install_zipped_single'
}
module.exports = data
