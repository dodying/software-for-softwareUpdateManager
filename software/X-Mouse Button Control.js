'use strict'

let data = {
  url: 'https://www.highrez.co.uk/downloads/xmbc_changelog.htm',
  version: {
    selector: 'br+div>div'
  },
  download: {
    plain: 'https://www.highrez.co.uk/scripts/download.asp?package=XMousePortable'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath, null, '64bit*')
  }
}
module.exports = data
