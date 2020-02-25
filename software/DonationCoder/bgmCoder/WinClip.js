'use strict'

let data = {
  url: 'http://www.dcmembers.com/bgmcoder/download/winclip/',
  version: ['[class="list-group-item [hide_empty:version]"]>span', 'text', /(.*)/],
  download: ['a.wpdm-download-link', 'onclick', /^this.href='(.*)';$/],
  install: ['install_zipped', 'install']
}
module.exports = data
