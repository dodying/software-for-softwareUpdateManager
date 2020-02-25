'use strict'

let data = {
  commercial: 3,
  url: 'https://docs.wiris.com/en/mathtype/release_notes/start',
  version: 'h2[id^="release_mathtype_desktop"]',
  changelog: {
    selector: '.dw-content',
    attr: 'text',
    match: /^Release MathType/,
    split: true
  },
  download: 'https://store.wiris.com/en/products/downloads/mathtype/installer/windows/zh',
  install: ['install_nsis', null, '$LOCALAPPDATA\\Temp\\mathtype.tmp']
}
module.exports = data
