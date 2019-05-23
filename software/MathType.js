'use strict'

let data = {
  commercial: 3,
  url: 'https://docs.wiris.com/en/mathtype/release_notes/start',
  version: {
    selector: 'h2[id^="release_mathtype_desktop"]'
  },
  download: {
    plain: 'https://store.wiris.com/en/products/downloads/mathtype/installer/windows/zh'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath, null, '$LOCALAPPDATA\\Temp\\mathtype.tmp')
  }
}
module.exports = data
