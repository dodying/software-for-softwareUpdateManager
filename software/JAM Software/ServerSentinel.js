'use strict'

let data = {
  commercial: 3,
  url: 'https://www.jam-software.com/serversentinel/',
  version: {
    selector: '.uppercase'
  },
  download: {
    plain: 'https://www.jam-software.com/serversentinel/ServerSentinel-Demo.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno.type(output, iPath, null, '1')
  }
}
module.exports = data
