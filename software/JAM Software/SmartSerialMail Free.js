'use strict'

let data = {
  url: 'https://www.jam-software.com/smartserialmail_free/',
  version: {
    selector: '.uppercase'
  },
  download: {
    plain: 'https://www.jam-software.com/smartserialmail_free/SmartSerialMail-Freeware.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno.type(output, iPath, null, '1')
  }
}
module.exports = data
