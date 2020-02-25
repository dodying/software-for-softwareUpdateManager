'use strict'

let data = {
  url: 'http://www.dcmembers.com/skwire/download/volt/',
  version: ['[class="list-group-item [hide_empty:version]"]>span', 'text', /(.*)/],
  download: ['a.wpdm-download-link', 'onclick', /^this.href='(.*)';$/],
  install: 'install_inno'
}
module.exports = data
