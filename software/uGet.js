'use strict'

let data = {
  withoutHeader: true,
  url: 'https://ugetdm.com/downloads/windows/',
  version: {
    selector: '[data-content-shortcode="vcache type=\\"uget\\" mode=\\"versions\\" key=\\"stable\\" label=\\"uGet: \\""]'
  },
  download: {
    plain: 'https://ugetdm.com/go/windows-download'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
