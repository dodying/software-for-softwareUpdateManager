'use strict'

let data = {
  url: 'http://www.dcmembers.com/skrommel/download/minimother/',
  version: ['[class="list-group-item [hide_empty:version]"]>span', 'text', /(.*)/],
  download: ['a.wpdm-download-link', 'onclick', /^this.href='(.*)';$/],
  install: 'install'
}
module.exports = data
