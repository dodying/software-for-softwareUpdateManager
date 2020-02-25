'use strict'

let data = {
  url: 'http://www.dcmembers.com/skwire/download/splaylistmaker/',
  version: ['[class="list-group-item [hide_empty:version]"]>span', 'text', /(.*)/],
  download: ['a.wpdm-download-link', 'onclick', /^this.href='(.*)';$/],
  install: 'install_zipped_single'
}
module.exports = data
