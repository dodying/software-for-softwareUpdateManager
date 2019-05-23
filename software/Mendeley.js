'use strict'

let data = {
  commercial: 2,
  url: 'https://www.mendeley.com/release-notes',
  version: {
    selector: 'h3>a'
  },
  download: {
    plain: 'https://www.mendeley.com/autoupdates/installer/Windows-x86/stable-incoming'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
