'use strict'

let data = {
  commercial: 2,
  url: 'https://rbsoft.org/downloads/right-click-enhancer/rce-changelog.html',
  version: {
    selector: '#section-changelog>h3'
  },
  download: {
    plain: 'https://rbsoft.org/downloads/right-click-enhancer/Right-Click-Enhancer.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
