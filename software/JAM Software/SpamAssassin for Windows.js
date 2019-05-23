'use strict'

let data = {
  url: 'https://www.jam-software.com/spamassassin/',
  version: {
    selector: '.uppercase'
  },
  download: {
    plain: 'https://www.jam-software.com/spamassassin/SpamAssassinForWindows-x64.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
