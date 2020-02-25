'use strict'

let data = {
  url: 'https://github.com/miaomiaosoft/PandaOCR/releases/latest',
  version: ['.muted-link.css-truncate', 'text', /(.*)/],
  changelog: '.release-header+.markdown-body',
  download: 'a[href*="miaomiaosoft/PandaOCR/files"][href$=".zip"]',
  install: 'install_zipped_single'
}
module.exports = data
