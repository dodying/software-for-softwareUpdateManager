'use strict'

let data = {
  url: 'https://rammichael.com/downloads/textify_setup.exe?changelog',
  version: {
    selector: 'b'
  },
  download: {
    plain: 'https://rammichael.com/downloads/textify_setup.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath, ['Textify.ini', 'WebApp.ini'])
  }
}
module.exports = data
