'use strict'

let data = {
  withoutHeader: true,
  url: 'https://www.pidgin.im/',
  version: {
    selector: '.number'
  },
  download: {
    selector: '.sourceforge_accelerator_link'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
