'use strict'

let data = {
  commercial: 3,
  url: 'https://www.connectify.me/new-release/',
  version: {
    selector: 'h2.h2+h2.h3'
  },
  download: {
    plain: 'http://downloads.connectify.me/'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath, null, '$TEMP\\Connectify\\$_13_')
  }
}
module.exports = data
