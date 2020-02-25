'use strict'

let data = {
  url: 'https://github.com/lifenjoiner/ISx/releases/latest',
  version: ['.muted-link.css-truncate', 'text', /v(.*)/],
  changelog: '.release-header+.markdown-body',
  download: 'a[href$="bin.zip"]',
  install: 'install_zipped_single'
}
module.exports = data
